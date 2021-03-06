import { Router, Request, Response, NextFunction } from "express";
import { Container } from "typedi"
import { ILocationDTO } from "../../interfaces/ILocation";
import StatusService from "../../services/status";

const router: Router = Router();

export default (app: Router) => {
    app.use("/status", router);

    router.get("/sido", async (req: Request, res: Response, next: NextFunction) => {
        try {
            const statusServiceInstance: StatusService = Container.get(StatusService);
            const sidoStatus : Service.SidoResponse = await statusServiceInstance.getSidoStatus();

            return res.status(200).json(sidoStatus);
        } catch (err) {
            console.error(err);
            return next(err);
        }
    });

    router.get("/patient", async (req: Request, res: Response, next: NextFunction) => {
        try {
            const statusServiceInstance: StatusService = Container.get(StatusService);
            const patientStatus: Service.PatientResponse = await statusServiceInstance.getPatientStatus();

            return res.status(200).json(patientStatus);
        } catch (err) {
            console.error(err);
            return next(err);
        }
    });

    router.get("/clinic", async (req: Request, res: Response, next: NextFunction) => {
        try {
            const locationDTO: ILocationDTO = req.query;
            const statusServiceInstance: StatusService = Container.get(StatusService);
            const clinicStatus: Service.HospitalResponse = await statusServiceInstance.getHospitalStatus(locationDTO, 'clinic');
    
            return res.status(200).json(clinicStatus);
        } catch (err) {
            console.error(err);
            return next(err);
        }
    });

    router.get("/hospital", async (req: Request, res: Response, next: NextFunction) => {
        try {
            const locationDTO: ILocationDTO = req.query;
            const statusServiceInstance: StatusService = Container.get(StatusService);
            const hospitalStatus: Service.HospitalResponse = await statusServiceInstance.getHospitalStatus(locationDTO, 'hospital');
    
            return res.status(200).json(hospitalStatus);
        } catch (err) {
            console.error(err);
            return next(err);
        }
    });
};
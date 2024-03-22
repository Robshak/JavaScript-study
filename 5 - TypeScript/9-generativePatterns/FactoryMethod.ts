namespace FactoryMethod{
    interface IInsurance{ // Основной интерфейс, от которого будут наследоваться классы - разновидности объекта
        id: number;
        status: string;
        setVehicle(vechicle: any): void;
        sumbit(): Promise<boolean>;
    }

    class TFInsurance implements IInsurance{ // класс - разновидность
        id: number;
        status: string;
        private vehicle: any;

        setVehicle ( vehicle: any ): void {
            this.vehicle = vehicle;
        }

        async sumbit (): Promise<boolean> {
            const res = await fetch('', {
                method: 'POST',
                body: JSON.stringify({vehicle: this.vehicle})
            })
            const data = await res.json();
            return data.isSuccess;
        }
    }

    class ABInsurance implements IInsurance{ // класс - разновидность
        id: number;
        status: string;
        private vehicle: any;
        
        setVehicle ( vehicle: any ): void {
            this.vehicle = vehicle;
        }

        async sumbit (): Promise<boolean> {
            const res = await fetch('ab', {
                method: 'POST',
                body: JSON.stringify({vehicle: this.vehicle})
            })
            const data = await res.json();
            return data.yes;
        }
    }

    abstract class InsuranceFactory{ // абстрактный класс, от которого будут наследоваться конкретные фабрики 
        db: any;

        abstract createIncurance(): IInsurance;

        saveHistory(ins: IInsurance){
            this.db.save(ins.id, ins.status);
        }
    }

    class TFInsuranceFactory extends InsuranceFactory{ // фабрика, реализующая разновидность объекта
        createIncurance (): TFInsurance {
            return new TFInsurance();
        }
    }

    class ABInsuranceFactory extends InsuranceFactory{ // фабрика, реализующая разновидность объекта
        createIncurance (): ABInsurance {
            return new ABInsurance();
        }
    }

    // пример работы с классами
    const tfInsuranceFactory = new TFInsuranceFactory();
    const ins = tfInsuranceFactory.createIncurance();
    tfInsuranceFactory.saveHistory(ins);
}
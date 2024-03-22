namespace TemplateMethod{
    class Form{ // просто класс для демонстрации
        constructor(public name: string){}
    }

    abstract class SaveForm<T>{ // абстрактный класс для метода
        public save(form: Form){
            const res = this.fill(form);
            this.log(res);
            this.send(res);
        }

        protected abstract fill(form: Form): T;

        protected log(data: T): void{
            console.log(data);
        }

        protected abstract send(data: T): void;
    }

    class FirstAPI extends SaveForm<string>{ // одна из реализаций метода
        protected fill ( form: Form ): string {
            return form.name;
        }
        protected send ( data: string ): void {
            console.log(`send ${data}`);
        }
    }

    class SecondAPI extends SaveForm<{fio: string}>{ // одна из реализаций метода
        protected fill ( form: Form ): {fio: string} {
            return {fio: form.name};
        }
        protected send ( data: {fio: string} ): void {
            console.log(`send ${data}`);
        }
    }


    // пример взаимодействия
    const form1 = new FirstAPI();
    form1.save(new Form('Vasya'));

    const form2 = new SecondAPI();
    form2.save(new Form('Bob'));
}
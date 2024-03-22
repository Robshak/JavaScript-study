namespace StateNamespace{
    class DocumentItem{ // объект, у кторого есть состояния
        public text: string;
        private state: DocumentItemState;

        constructor(){
            this.setState(new DraftDocumentItemState());
        }

        setState(state: DocumentItemState){
            this.state = state;
            this.state.setContext(this);
        }

        getState(){
            return this.state;
        }

        publishDoc(){
            this.state.publish();
        }

        deleteDoc(){
            this.state.delete();
        }
    }

    abstract class DocumentItemState{ // абстрактное состояние
        public name: string;
        public item: DocumentItem;

        public setContext(item: DocumentItem){
            this.item = item;
        }

        public abstract publish(): void;
        public abstract delete(): void;
    }

    class DraftDocumentItemState extends DocumentItemState{ // одно из состояний
        constructor(){
            super();
            this.name = 'DraftDocumetn';
        }

        public publish (): void {
            console.log(`sended text: ${this.item.text}`);
            this.item.setState(new PublishDocumentItemState());
        }

        public delete (): void {
            console.log('deleted')
        }
    }

    class PublishDocumentItemState extends DocumentItemState{ // одно из состояний
        constructor(){
            super();
            this.name = 'PublishDocumetn';
        }

        public publish (): void {
            console.log('document already publish');
        }

        public delete (): void {
            console.log('state back to draft');
            this.item.setState(new DraftDocumentItemState());
        }
    }


    // пример взаимодействия
    const item = new DocumentItem();
    item.text = 'my document';
    console.log(item.getState());
    item.publishDoc();
    console.log(item.getState());
    item.publishDoc();
    item.deleteDoc();
    console.log(item.getState());
}
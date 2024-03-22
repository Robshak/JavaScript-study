"use strict";
var StateNamespace;
(function (StateNamespace) {
    class DocumentItem {
        constructor() {
            this.setState(new DraftDocumentItemState());
        }
        setState(state) {
            this.state = state;
            this.state.setContext(this);
        }
        getState() {
            return this.state;
        }
        publishDoc() {
            this.state.publish();
        }
        deleteDoc() {
            this.state.delete();
        }
    }
    class DocumentItemState {
        setContext(item) {
            this.item = item;
        }
    }
    class DraftDocumentItemState extends DocumentItemState {
        constructor() {
            super();
            this.name = 'DraftDocumetn';
        }
        publish() {
            console.log(`sended text: ${this.item.text}`);
            this.item.setState(new PublishDocumentItemState());
        }
        delete() {
            console.log('deleted');
        }
    }
    class PublishDocumentItemState extends DocumentItemState {
        constructor() {
            super();
            this.name = 'PublishDocumetn';
        }
        publish() {
            console.log('document already publish');
        }
        delete() {
            console.log('state back to draft');
            this.item.setState(new DraftDocumentItemState());
        }
    }
    const item = new DocumentItem();
    item.text = 'my document';
    console.log(item.getState());
    item.publishDoc();
    console.log(item.getState());
    item.publishDoc();
    item.deleteDoc();
    console.log(item.getState());
})(StateNamespace || (StateNamespace = {}));

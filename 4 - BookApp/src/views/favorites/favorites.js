import { AbstractView } from "../../common/view.js";
import onChange from "on-change";
import { Header } from "../../components/header/header.js";
import { BooksContent } from "../../components/books/BooksContent.js";

export class FavoritesView extends AbstractView {
    state = {
        list: [],
        offset: 0,
    };

    constructor(appState) {
        super();
        this.appState = appState;
        this.appState = onChange(this.appState, this.appStateHook.bind(this));
        this.state = onChange(this.state, this.stateHook.bind(this));
        this.setTitle('Favorites book');
    }

    destroy(){
        onChange.unsubscribe(this.appState);
        onChange.unsubscribe(this.state);
    }

    appStateHook(path) {
        if(path === 'favorites'){
            this.render();
        }
    }

    stateHook(path) {
        if(path === 'offset'){
            this.render();
        }
    }

    render() {
        this.state.list = this.appState.favorites;

        const main = document.createElement('div');
        const pageHeader = document.createElement('div');
        pageHeader.classList.add('content__header');
        pageHeader.innerHTML = `Favorites`;
        const pageIsEmpty = document.createElement('div');
        pageIsEmpty.classList.add('favoritesIsEmpty');
        pageIsEmpty.innerHTML = `you don't have any favorite books now`;
        main.append(pageHeader);
        if(this.state.list.length === 0){
            main.append(pageIsEmpty);
        }
        main.append(new BooksContent(this.appState, this.state).render());
        this.app.innerHTML = '';
        this.app.append(main);
        this.renderHeader();
    }

    renderHeader(){
        const header = new Header(this.appState).render();
        this.app.prepend(header);
    }
}
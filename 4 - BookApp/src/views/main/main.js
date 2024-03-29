import { AbstractView } from "../../common/view.js";
import onChange from "on-change";
import { Header } from "../../components/header/header.js";
import { Search } from "../../components/search/search.js";
import { BooksContent } from "../../components/books/BooksContent.js";

export class MainView extends AbstractView {
    state = {
        list: [],
        numFound: 0,
        loading: false,
        searchQuery: undefined,
        offset: 0,
    };

    constructor(appState) {
        super();
        this.appState = appState;
        this.appState = onChange(this.appState, this.appStateHook.bind(this));
        this.state = onChange(this.state, this.stateHook.bind(this));
        this.setTitle('Search books');
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

    async stateHook(path){
        if(path === 'searchQuery'){
            this.state.loading = true;
            this.render();
            const data = await this.loadList(this.state.searchQuery, this.state.offset);
            this.state.loading = false;
            this.state.numFound = data.numFound;
            this.state.list = data.docs;
            this.render();
        }
        if(path === 'offset'){
            this.render();
        }
    }

    async loadList(q, offset){
        const res = await fetch(`https://openlibrary.org/search.json?q=${q}&offset=${offset}`);
        return (await res.json());
    }

    render() {
        const main = document.createElement('div');
        main.append(new Search(this.state).render());
        const pageIsEmpty = document.createElement('div');
        pageIsEmpty.classList.add('favoritesIsEmpty');
        pageIsEmpty.innerHTML = `Search book or autor....`;
        if(this.state.list.length === 0 && !this.state.loading){
            main.append(pageIsEmpty);
        }
        else{
            if(!this.state.loading){
                const pageHeader = document.createElement('div');
                pageHeader.classList.add('content__header');
                pageHeader.innerHTML = `Books found - ${this.state.numFound}`;
                main.append(pageHeader);
            }
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
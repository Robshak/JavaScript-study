import { DivComponent } from "../../common/div-component.js";
import './BooksContent.css';

export class BooksContent extends DivComponent{
    constructor(appState, state){
        super();
        this.appState = appState;
        this.state = state;
    }

    render(){
        this.el.classList.add('books-content');
        if(this.state.loading){
            this.el.classList.add('books-content_loading');
            this.el.innerHTML = `
                <div class="loading__animation">
                    Loading
                    <div class="loader"></div>
                </div>
                
            `;
        }
        else{
            this.el.classList.add('books-content_found');
            this.el.innerHTML = `
                Books found - ${this.state.list.length}
            `;
        }
        return this.el;
    }
}
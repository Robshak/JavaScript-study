import { DivComponent } from "../../common/div-component.js";
import './search.css';

export class Search extends DivComponent{
    constructor(state){
        super();
        this.state = state;
    }

    search(){
        const value = this.el.querySelector('.search__input').value;
        this.state.searchQuery = value;
    }

    render(){
        this.el.classList.add('search');
        this.el.innerHTML = `
            <div class="search__input-block">
                <label for="search" class="search__input__label"><img src="./static/imgs/icons/search.svg" alt="search"></label>
                <input
                    id="search"
                    placeholder="Search book or author...."
                    type="text"
                    class="search__input"
                    value="${this.state.searchQuery ? this.state.searchQuery : ''}">
            </div>
            <div class=".button-container-1">
                <button class="search__button button-container-1" >
                    <img src="./static/imgs/icons/search.svg" alt="search" class="img_inv">
                </button>
            <div>
        `;
        this.el.querySelector('.search__button').addEventListener('click', this.search.bind(this));
        this.el.querySelector('.search__input').addEventListener('keydown', (event) => {
            if(event.code == 'Enter'){
                this.search();
            }
        });
        return this.el;
    }
}
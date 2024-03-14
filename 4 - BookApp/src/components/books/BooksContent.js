import { DivComponent } from "../../common/div-component.js";
import { BookCard } from "../../components/book-card/book-card.js";
import './BooksContent.css';

export class BooksContent extends DivComponent{
    constructor(appState, state){
        super();
        this.appState = appState;
        this.state = state;
    }

    render(){
        this.el.innerHTML = `<div class="content__cards"></div>`
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
            for(let i = this.state.offset * this.appState.countElementsOnPage; i < (1 + this.state.offset) * this.appState.countElementsOnPage; i++){
                if(i >= this.state.list.length){
                    break;
                }
                const cardInfo = this.state.list[i];
                let name = cardInfo.title;
                let author = cardInfo.author;
                let subject;
                let coverId = cardInfo.cover_i;
                let cardKey = cardInfo.key;
                if(cardInfo.subject){
                    subject = cardInfo.subject[0];
                }

                const card = new BookCard(name, author, coverId, subject, cardKey, this.appState).render();
                this.el.querySelector('.content__cards').appendChild(card);
            }

            if(this.state.list.length){
                const changePage = document.createElement('div');
                changePage.classList.add('changePage');
                changePage.innerHTML = `
                    <button class="changePage__button previousPage">previous page</button>
                    <div class="pageNumber">${this.state.offset + 1}</div>
                    <button class="changePage__button nextPage">next page</button>
                `;
                changePage.querySelector('.previousPage').addEventListener('click', () => {
                    this.state.offset = Math.max(0, this.state.offset - 1);
                });
                changePage.querySelector('.nextPage').addEventListener('click', () => {
                    this.state.offset = Math.min(Math.ceil(this.state.list.length / this.appState.countElementsOnPage) - 1, this.state.offset + 1);
                });
                this.el.appendChild(changePage);
            }
        }
        return this.el;
    }
}
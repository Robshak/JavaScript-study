import { DivComponent } from "../../common/div-component.js";
import './book-card.css';

export class BookCard extends DivComponent{
    constructor(name, author, coverId, genre, key, appState){
        super();
        this.name = name;
        this.author = author;
        this.coverId = coverId;
        this.genre = genre;
        this.cardKey = key;
        this.appState = appState;
    }

    render(){
        this.el.classList.add('book-card');
        const existInFavorites = this.appState.favorites.find((el) => el.key == this.cardKey);
        this.el.innerHTML = `
            <div class="card__img">
                <img src="https://covers.openlibrary.org/b/id/${this.coverId}-M.jpg" alt="cover">
            </div>
            <div class="card__body">
                <div class="card__description">
                    <div class="card__genre">${this.genre}</div>
                    <div class="card__name">${this.name}</div>
                    <div class="card__author">${this.author}</div>
                </div>
                <button class="card__addButton ${existInFavorites ? 'card__addButton_favorite' : ''}">
                    <img src="./static/imgs/icons/favorites.svg" alt="" class="img_inv">
                </button>
            </div>
        `;

        this.el.querySelector('.card__addButton').addEventListener('click', () => {
            const existInFavorites = this.appState.favorites.find((el) => el.key == this.cardKey);
            if(existInFavorites){
                this.el.querySelector('.card__addButton').classList.remove('card__addButton_favorite');
                this.appState.favorites = this.appState.favorites.filter((card) => {
                    return card.key != this.cardKey;
                })
            }
            else{
                this.el.querySelector('.card__addButton').classList.add('card__addButton_favorite');
                this.appState.favorites.push({
                    key: this.cardKey,
                    title: this.name,
                    author: this.author,
                    cover_i: this.coverId,
                    subject: [this.genre]
                });
            }
        })
        return this.el;
    }
}
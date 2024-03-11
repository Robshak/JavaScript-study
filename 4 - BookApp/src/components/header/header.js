import { DivComponent } from "../../common/div-component.js";
import './header.css'

export class Header extends DivComponent{
    constructor(appState){
        super();
        this.appState = appState;
    }

    render() {
        this.el.innerHTML = '';
        this.el.classList.add('header');
        this.el.innerHTML = `
            <img src="./static/imgs/logo.svg" alt="logo" />
            <div class="header__body">
                <a class="header__block header__search" href="#">
                    <img src="./static/imgs/icons/search.svg" alt="search" class="header__img">
                    <div>Search books</div>
                </a>
                <a class="header__block header__favorites" href="#favorites">
                    <img src="./static/imgs/icons/favorites.svg" alt="favorites" class="header__img">
                    <div>Favorites</div>
                    <div class="header__favorites-count">
                        ${this.appState.favorites.length}
                    </div>
                </a>
            </div>
        `;
        return this.el;
    }
}
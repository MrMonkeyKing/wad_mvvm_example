import * as ko from "knockout";
import {Observable} from "knockout";

interface AppParams {
}

// Exchange for enum from main_panel if rdy
enum Navigation {
    home,
    popular,
    newMovies,
    watchAgain
}

export default class Navbar {

    constructor() {
    }

    dispose() {
    }

    onClickEventNavigation(navigation: number) {
        switch (navigation) {
            case Navigation.home:
                this.disableEveryThingExcept(Navigation.home)
                break;
            case Navigation.popular:
                this.disableEveryThingExcept(Navigation.popular)
                break;
            case Navigation.newMovies:
                this.disableEveryThingExcept(Navigation.newMovies)
                break;
            case Navigation.watchAgain:
                this.disableEveryThingExcept(Navigation.watchAgain)
                break;
        }
    }

    disableEveryThingExcept(active: number) {
        let home = document.getElementById('navbar_home')
        let popular = document.getElementById('navbar_popular')
        let watchAgain = document.getElementById('navbar_watchAgain')
        let newMovies = document.getElementById('navbar_newMovies')

        switch (active) {
            case Navigation.home:
                if (home && popular && watchAgain && newMovies) {
                    home.className = 'active'
                    popular.className = 'default'
                    newMovies.className = 'default'
                    watchAgain.className = 'default'
                }
                break;
            case Navigation.popular:
                if (home && popular && watchAgain && newMovies) {
                    home.className = 'default'
                    popular.className = 'active'
                    newMovies.className = 'default'
                    watchAgain.className = 'default'
                }
                break;
            case Navigation.newMovies:
                if (home && popular && watchAgain && newMovies) {
                    home.className = 'default'
                    popular.className = 'default'
                    newMovies.className = 'active'
                    watchAgain.className = 'default'
                }
                break;
            case Navigation.watchAgain:
                if (home && popular && watchAgain && newMovies) {
                    home.className = 'default'
                    popular.className = 'default'
                    newMovies.className = 'default'
                    watchAgain.className = 'active'
                }
                break;
        }
    }
}
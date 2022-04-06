# Step 1: Application Shell 

## Initial App

1. Setup angular

   `ng new app --style css --routing true`

2. Add PWA support

   `ng add @angular/pwa`

3. Remove Angular icons and copy Snagajob icons from live website to assets/icons

    - https://www.snagajob.com/v2assets/saj/favicons/favicon.ico
    - https://www.snagajob.com/v2assets/images/icons/icon.png
    - https://www.snagajob.com/v2assets/images/icons/icon_ios.png

4. Add icon links tp `index.html`

    ```
    <link rel="icon" type="image/x-icon" href="assets/icons/favicon.ico">
    <link rel="icon" sizes="192x192" href="assets/icons/icon.png">
    <link rel="apple-touch-icon" href="assets/icons/icon_ios.png">
    ```

5. Set the theme-color to `#2d2873`

6. Move CSS from `index.html` to `style.css`

7. Define root variables with Snagajob purple color to start.

    ```CSS
    :root {
        --snagajob-purple: #4c2d79;
    }
    ```


8. Replace all references Angular blue with snagajob-purple

    e.g. 

    ```CSS
    background-color: var(--snagajob-purple);
    ```

9. Replace Angular header icon wih `assets/images/snagajob-white.svg`

10. Delete Twitter and Youtube icons from app header

11. Delete contents of the #main and footer elements

12. `app.component.html` should now look like this:

    ```HTML
    <div class="toolbar" role="banner">
    <img
        alt="Snagajob"
        src="assets/images/snagajob-white.svg"
        width="120px"
        height="30px"
    />

    <div class="content" role="main"></div>

    <!-- Footer -->
    <footer></footer>

    </div>

    <router-outlet></router-outlet>

    ```

13. Start the local server:

    Excecute `ng serve` 
    and open a browser to `http://localhost:4200/`


14. App Shell screenshot:

    ![App shell screenshot](app-shell-screenshot.png)
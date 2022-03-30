# project third parties :
Axios => for calling API and Handling errors in Axios interceptors;
Bootstrap 5 => for UI design and responsive  
reactstrap => for designing better and faster
(I'd prefer not to use icon font libs since we have just 3 icons and downloaded icons from Fontawsome)

# run project :
- run project:  npm start
- run tests: npm run test

# folder structure :
- assets: CSS files, Icons…
- components: common and reusable components
- hook : 1.custom > custom hook for API call , 2.context : useContext hook 
- pages: including project pages and component 
- routes: define project routes 
- utils: include util files such as Axios adapter and constants…

# How the project 
the first page is /search.
at first, the random component will show which includes a random gif every 10 s.
if the user focuses on input random gif will disappear and search result (without result) will show.
on click on the clear icon-search result will clear.
by clicking on the cancel button random gif will show.
if the user types +2 char in input search API will be called and the result will be shown on the search result.
it also include pagination component on click on +2 page , pageNumber will be adding in URL.and also if page number == 1 ,it hides from URL
I used **_still object form API to show just picture of gifs.
If you click on each gif, navigate to the detail page.
On the detail page, I used URL and Query string to keep the data.
I didn't find age on API so I used rating for the badge.

# testing :

I wrote the tests for some components in COMPONENTNAME.test.jsx



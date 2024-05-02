# To run the code in local

1. Take clone the repo,by using command below.
   ### `git clone https://github.com/allenbakki/job-search-portal.git`
2. after open terminal and run below command to install all the dependencies
   ### `npm install`
3. To run the project
   `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Approach:
To design a job list page enriched with various filters such as minimum base pay, minimum experience, roles, location, mode, and company name, the following steps were undertaken:

Infinite Scroll Implementation:

Instead of traditional scrolling, a mousewheel-based approach was adopted to trigger data loading (pagination with scroll). This method ensures functionality even when a limited number of entries meet the filtered criteria, possibly preventing the scrollbar from being activated.

Debouncing on Scroll Effect:

To address the interference between data rendering and the execution of useEffect during rapid scrolls, a debouncing technique was implemented on the mousewheel event. This adjustment effectively reduces the glitches experienced during scrolling by delaying the trigger of scroll events until the scrolling has ceased for a predefined interval.


Debouncing for Filter Inputs:

Similar to the scroll effect, debouncing was also applied to the input fields for location and company search. This was done to minimize the frequency of API calls triggered by changes in the input values. By delaying the execution of these filters, the performance was enhanced, preventing unnecessary and excessive data fetching.

UI Design with Material-UI:

The user interface components were constructed using Material-UI and the ui is responsive for all screens including mobile



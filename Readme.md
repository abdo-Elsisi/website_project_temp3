About
=====
-HTML5, CSS3, JS
-use fontawesome v6.5.1 library for icons.
-use google fonts (Cairo font).
-normalize v8.2 library to reset the page for different browsers.

HTML
=====
-Semantic element usage:
    Effectively employs semantic elements like header, nav, ul, li, a, img, and div for clear and accessible website structure.
-Logical hierarchy: 
    Content is organized with nested elements, making it easy for users and search engines to navigate.
-Dark/light mode toggle: 
    Users can switch between dark and light modes using a checkbox and label.

CSS
=====

Variables:
    Define colors, fonts, and spacing for easy customization.
    Include a dark mode toggle switch.
Universal Selector:
    Resets default margin and padding for all elements.
    Sets Cairo as the default font.
Container Class:
    Establishes a consistent width for content blocks.
    Uses media queries for responsive adjustments.
Styling Links and Selections:
    Unifies link appearance and customizes text selection highlights.
Smooth Scrolling:
    Enhances scrolling experience.
Custom Scrollbar:
    Styles the scrollbar for a sleeker look.
Dark Mode Switch:
    Toggles between light and dark color schemes.
Navigation Links:
    Hover effects and underline animation.
Mega Menu:
    Dropdown menu for displaying more content options.
Progress Bar:
    Sticks to the top of the viewport as the user scrolls.
    Uses CSS variables for customization.


JS
=====

-Interactivity and Visual Enhancements:

    Dynamic Mega Menu: The code implements a multi-column mega menu that expands on click, offering additional content options without cluttering the main navigation.
    Scrolling Progress Bar: As the user scrolls down the page, a progress bar visually indicates their progress, enhancing user experience.
    Animated Statistics Counters: Numerical counters within statistic cards animate as they come into view, adding visual appeal and drawing attention to key data.
    Testimonial Star Ratings: The code dynamically generates star ratings for testimonials, providing visual feedback for user reviews.
    Skill Progress Bars: Similar to statistic counters, skill progress bars animate as they scroll into view, showcasing skill levels in a visually engaging way.

-User Preferences and Customization:

    Dark/Light Mode Toggle: Users can switch between dark and light modes using a toggle switch, customizing the website's visual appearance to their preference.
    Persistent Theme Selection: The code remembers the user's chosen theme using local storage, ensuring their preferred setting is applied on subsequent visits.

-Upcoming Event Countdown:

    Date and Time Display: The code calculates and displays the remaining time until an upcoming event (set for August 22, 2024, at 8:00 AM), creating anticipation and keeping users informed.
    Countdown Timer: A clear countdown timer is displayed, indicating the days, hours, minutes, and seconds until the event begins.
    "Time's Up" Alert: Once the event time is reached, an alert message is displayed to signal its commencement.

-Additional Considerations:

    Code Organization: The code is well-organized with clear function names and comments, making it easier to understand and maintain.
    Event Date Customization: Remember to update the event date within the updateEventDate function to reflect your specific event's details.
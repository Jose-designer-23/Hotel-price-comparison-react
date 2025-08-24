# 🏨 Your Best Booking

An interactive web application to help you find the best accommodation and travel option, comparing hotel prices and other expenses in a clear and simple way.

## 📝 Project Description

"Your Best Booking" is a web tool designed to simplify the travel planning process. The application allows users to enter the details of their hotel stay (name, number of people, price per day, number of days of stay, and discounts) and calculates the total cost.

In addition, it offers dynamic features to include additional expenses such as car rental or currency conversion for trips abroad, all within an intuitive interface.

The application also saves a history of searches made, showing a summary of each hotel with its total price. Clicking on a saved hotel displays a detailed breakdown of its cost, allowing you to make the best value-for-money decision.

## ✨ Main Features

* **Hotel Cost Calculation:** Enter basic information to obtain the total price, including discounts.

* **Dynamic Car Form:** A checkbox automatically shows or hides fields to calculate the cost of a rental car.

* **Currency Conversion:** If you're planning an international trip, a checkbox activates a dropdown menu that allows you to convert the total cost from euros to another currency using the **ExchangeRate-API**.

* **Query History:** A panel on the left saves the hotels you've queried, showing the name and final price.

* **Detailed Breakdown:** Selecting a hotel from the history displays a full invoice with a breakdown of all expenses.

* **Form Validation:** Validations have been implemented to ensure that the data entered is correct before any calculations are performed.

## 🛠️ Technologies Used

The project is built with the following technologies:

* **React:** JavaScript library for building user interfaces.

* **Vite:** Modern and rapid front-end project builder.

* **Tailwind CSS:** CSS framework for rapid and stylish development.

* **React Hooks:** `useState` and `useEffect` for state management and side effects.

* **ExchangeRate API:** For obtaining real-time currency exchange rates.

* **Conditional Props:** For dynamic component rendering.

* **Component Structure:** Organization of code into reusable components (`HotelForm`, `CarForm`, `Bill`).

## 🚀 How to use it

1. Clone the repository:
`git clone https://github.com/Your-User/Hotel-price-comparison-react.git`

2. Install the dependencies:
`npm install`

3. Run the project:
`npm run dev`

4. Open the application in your browser:
`http://localhost:5173/` (or the port Vite tells you to)

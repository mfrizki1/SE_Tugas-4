function searchMeals(keyword) {
    document.getElementById("container_food_list").innerHTML = "";
  
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
      .then(response => response.json())
      .then(data => {
        const foods = data.meals;
        if (foods) {
        foods.forEach(food => {
        const foodItem = document.createElement("div");
        foodItem.classList.add("food_item");
      const foodImage = document.createElement("img");
      foodImage.src = food.strMealThumb;
      foodImage.alt = food.strMeal;
      foodItem.appendChild(foodImage);

      // Tambahkan judul makanan
      const foodTitle = document.createElement("h3");
      foodTitle.textContent = food.strMeal;
      foodItem.appendChild(foodTitle);

      // Tambahkan elemen makanan ke dalam container
      document.getElementById("container_food_list").appendChild(foodItem);
    });
  } else {
    // Tampilkan pesan jika tidak ada hasil pencarian
    const noResult = document.createElement("p");
    noResult.textContent = "Tidak ada hasil pencarian.";
    document.getElementById("container_food_list").appendChild(noResult);
  }
})
.catch(error => {
  console.log(error);
});
}

// Tangkap form pencarian saat disubmit
document.getElementById("search_form").addEventListener("submit", function(event) {
event.preventDefault(); // Mencegah refresh halaman

const keyword = document.getElementById("search_input").value;
searchMeals(keyword);
});
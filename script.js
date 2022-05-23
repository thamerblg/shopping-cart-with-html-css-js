$(".minus-btn").on("click", function (e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest("tr").find("input");
  var value = parseInt($input.val());

  if (value >= 2) {
    value = value - 1;
  } else {
    value = 1;
  }

  $input.val(value);

  var $uniquePrice = $this.closest("tr").find(".price").text();
  var amount = $uniquePrice * value;
  $this.closest("tr").find(".amount").text(amount);
  recalculateCart();
});

$(".plus-btn").on("click", function (e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest("tr").find("input");
  var value = parseInt($input.val());

  value = value + 1;
  $input.val(value);

  var $uniquePrice = $this.closest("tr").find(".price").text();
  var amount = $uniquePrice * value;
  $this.closest("tr").find(".amount").text(amount);
  recalculateCart();
});

/* Remove item from cart */
$(".delete-btn").click(function () {
  removeItem(this);
});

function removeItem(removeButton) {
  /* Remove row from DOM and recalc cart total */
  var productRow = $(removeButton).parent().parent();
  productRow.slideUp(300, function () {
    productRow.remove();
    recalculateCart();
  });
}

/* toggle between (like/dislike) item from cart */
$(".like-btn").click(function () {
  const color = this.style.color;
  if (color === "black") {
    this.style.color = "red";
  } else {
    this.style.color = "black";
  }
});

function recalculateCart() {
  let total_price = 0;
  $(".amount").each(function () {
    total_price += parseFloat(this.innerHTML, 10);
  });
  $("#cart-subtotal").text(total_price);
}

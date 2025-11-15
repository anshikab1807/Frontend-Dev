let productName = " wireless headphones PRO ";
productName = productName.trim();
productName = productName.toLowerCase();
productName = productName
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
productName = productName.replace("Pro", "Pro Edition");
console.log("Cleaned Title:", productName);
console.log("Length:", productName.length);

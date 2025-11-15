let feedback = "Great product! Fast delivery and amazing sound quality!";
let wordCount = words.length;
let hasNegative = feedback.toLowerCase().includes("bad") || feedback.toLowerCase().includes("poor");
if (!hasNegative) {
  console.log("Positive Feedback");
} else {
  console.log("Needs Improvement");
}
console.log("Word Count:", wordCount);

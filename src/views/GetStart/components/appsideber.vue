<script setup lang="ts">
import { reactive} from 'vue'

const myObject = reactive({
  title: 'How to study Vue.js',
  author: 'Layheang',
  publishedAt: '2016-04-10',
  description: 'A comprehensive guide to learning Vue.js step-by-step.',
  category: 'Web Development',
  pages: 320,
  publisher: 'Tech Publishers',
  ISBN: '978-3-16-148410-0',
  tags: ['JavaScript', 'Vue', 'Frontend', 'Framework'],
  isAvailable: true,
  ratings: 4.8,
  reviews: [
    {
      reviewer: 'John Doe',
      comment: 'Excellent resource for beginners!',
      rating: 5,
      date: '2021-06-12',
    },
    {
      reviewer: 'Jane Smith',
      comment: 'Very informative and well-structured.',
      rating: 4.5,
      date: '2021-07-08',
    },
  ],
  price: 29.99,               // Price of the book
  discount: 0.1,              // 10% discount
  totalSold: 1500,            // Total number of copies sold
  availableFormats: ['eBook', 'Paperback', 'Hardcover'], // Different formats of the book
  languages: ['English', 'Spanish', 'French'],  // Languages the book is available in
  authorDetails: {            // Nested object with more details about the author
    name: 'Layheang',
    birthDate: '1985-08-15',
    nationality: 'Cambodian',
    otherBooks: ['Mastering Vue', 'JavaScript for Beginners'],
    socialMedia: {
      twitter: '@layheang_js',
      website: 'https://layheang.dev',
    },
  },
  editors: ['Alice', 'Bob'],  // Array of people who edited the book
  publishedLocations: ['USA', 'Canada', 'UK'],  // List of countries where the book is published
  coverImageUrl: 'https://example.com/cover.jpg',  // URL to the book cover image
  lastUpdated: '2024-09-01',  // Date when the data was last updated
  awards: [
    { name: 'Best Tech Book', year: 2017 },
    { name: 'Top Web Development Book', year: 2018 },
  ],
  readingTime: '10 hours',    // Estimated reading time for the book
  featured: true,             // Boolean to indicate if the book is featured
  popularityScore: 98,        // A score that reflects the book's popularity
});

</script>
<template>
    <div class="flex flex-col  p-1 box-border h-[90vh]">
        <div class="h-[7vh]">
            <div class=" text-center text-[25px] font-bold text-white/70">
                <h1>History</h1>
            </div>
        </div>
        <div class="webkit-scrollbar h-[70vh] overflow-auto flex flex-col ">
            <div class="p-1 text-yellow-300/70 mb-3">
                <h1>Previous 7 Day</h1>
            </div>
            <div class="p-1 text-white/70  ">
                <p v-for="value in myObject" :key="value"
                    class="truncate mb-2">
                    {{ value }}
                </p>
              
            </div>
        </div>
        <div class=" justify-center flex flex-col h-[10vh] p-1 relative">
            <div class="text-center text-[30px] font-medium text-black/70">
                <i>Speech-To-text </i>
            </div>
            
        </div>
       
    </div>
</template>
<style scoped>
/* Custom scrollbar styling */
::-webkit-scrollbar {
  width: 12px; /* Width of the scrollbar */
}

::-webkit-scrollbar-thumb {
  background-color: #664d5b; /* Color of the scrollbar */
  border-radius: 6px; /* Roundness of the scrollbar */
  border: 3px solid #F7F7F7; /* Adds a border around the scrollbar */
}

::-webkit-scrollbar-track {
  background-color: #F7F7F7; /* Background color of the scrollbar track */
}


</style>



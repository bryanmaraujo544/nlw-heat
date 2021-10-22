export const slowContainer = {
   hidden: {
      opacity: 0
   }, 
   show: {
      opacity: 1,
      transition: {
         delayChildren: 0.5,
         staggerChildren: 1
      }
   }
}

export const childVariants = {
   hidden: {
      opacity: 0, 
      y: -100
   }, 
   show: {
      opacity: 1, 
      y: 0
   }
}
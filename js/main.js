document.addEventListener('DOMContentLoaded', function () {

  const viewMenuLinks = document.querySelectorAll('.view-menu');
  const purchasableItemsSection = document.getElementById('purchasable-items');

  viewMenuLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      // For demonstration purposes, toggle the visibility of the purchasable items section
      if (purchasableItemsSection.style.display === 'none') {
        purchasableItemsSection.style.display = 'block';
      } else {
        purchasableItemsSection.style.display = 'none';
      }

      // In a real scenario, you'd fetch and update data from the backend here
      // For now, we're just toggling the visibility of the purchasable items section
    });
  });

});

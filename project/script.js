window.onload = function() {
    var container = document.getElementById('circleContainer');
    var activeCircle = null; // To keep track of the currently active circle
    var contentSections = document.querySelectorAll('.content-section');

    function createCircle(radius, color, label, topOffset, borderColor, contentId) {
        var circle = document.createElement('div');
        circle.style.width = radius * 2 + 'px';
        circle.style.height = radius * 2 + 'px';
        circle.style.borderRadius = '50%';
        circle.style.backgroundColor = color;
        circle.style.border = `2px solid ${borderColor}`;
        circle.style.position = 'absolute';
        circle.style.top = `calc(100px - ${topOffset}px)`;
        circle.style.left = '12%'; // Center circles horizontally within the container
        circle.style.transform = 'translate(-50%, 0)'; // Center horizontally and vertically
        circle.style.display = 'flex';
        circle.style.justifyContent = 'center'; // Center text inside the circle
        circle.style.alignItems = 'flex-start'; // Align items to the top
        circle.style.paddingTop = '20px';
        circle.style.color = 'white';
        circle.style.fontSize = '14px'; // Make the text smaller
        circle.style.textAlign = 'center'; // Center text inside the circle
        circle.innerHTML = label;

         // Add hover effect
         circle.addEventListener('mouseover', function() {
            circle.style.width = (radius * 2 + 10) + 'px'; // Increase the width by 10px
            circle.style.height = (radius * 2 + 10) + 'px'; // Increase the height by 10px
            circle.style.transform = 'cale(1.1)'; // Scale up the circle on hover
            circle.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.9)';
            circle.style.cursor = 'pointer';
        });

        circle.addEventListener('mouseout', function() {
            circle.style.transform = 'cale(1)'; // Reset the scale on mouse out
            circle.style.boxShadow = 'none';
            circle.style.cursor = 'default';
            circle.style.width = radius * 2 + 'px'; // Reset the width
            circle.style.height = radius * 2 + 'px'; // Reset the height
        });

        circle.addEventListener('click', function() {
            if (activeCircle) {
                activeCircle.style.backgroundColor = color; // Reset the color of the previously active circle
            }
            circle.style.backgroundColor = '#D63131'; // Highlight the clicked circle
            activeCircle = circle; // Set the clicked circle as the active one
            updateContent(contentId); // Update the content based on the clicked circle
        });

        return circle;
    }

    function updateContent(contentId) {
        contentSections.forEach(function(section) {
            if (section.id === contentId) {
                section.style.display = 'block';
                section.classList.add('active');
            } else {
                section.style.display = 'none';
                section.classList.remove('active');
            }
        });
    }

    var borderColor = 'white';
    var defaultColor = 'rgba(51, 51, 51, 0.6)';
    var labels = [
        'Artificial Intelligence (AI)',
        'Machine Learning (ML)',
        'Deep Learning (DL)',
        'Generative AI',
        'Deepfakes <br> Audio Spoofing'
    ];
    var contentIds = ['content1', 'content2', 'content3', 'content4', 'content5'];
    var radii = [200, 170, 140, 100, 60]; // Larger radii for overlap
    var topOffsets = [0, -60, -120, -200, -280]; // Adjust top offsets for each circle, matching the radius of each circle

    var circles = [];
    for (var i = 0; i < radii.length; i++) {
        var circle = createCircle(radii[i], defaultColor, labels[i], topOffsets[i] + 10 * i, borderColor, contentIds[i]);
        container.appendChild(circle);
        circles.push(circle);
    }

    // Simulate click on the first circle to set default view
    circles[0].click();
};
document.addEventListener('DOMContentLoaded', () => {
    const panels = document.querySelectorAll('.body-panel');
    const contentSections = document.querySelectorAll('.content-section');

    function showContent(target) {
        contentSections.forEach(section => {
            section.style.display = section.id === target ? 'block' : 'none';
        });

        panels.forEach(p => p.style.backgroundColor = 'rgba(51, 51, 51, 0.9)');
        const activePanel = document.querySelector(`.body-panel[data-target="${target}"]`);
        if (activePanel) {
            activePanel.style.backgroundColor = '#D63131';
        }

        // Hide or show the timeline container based on the target
        const timelineContainer = document.getElementById('timelineContainer');
        if (timelineContainer) {
            timelineContainer.style.display = target === 'content1' ? 'block' : 'none';
        }
    }

    panels.forEach(panel => {
        panel.addEventListener('click', (e) => {
            e.preventDefault();
            const target = panel.getAttribute('data-target');
            showContent(target);
        });
    });

    // Check if there's a hash in the URL and show corresponding content, otherwise show button1 content
    if (window.location.hash) {
        showContent(window.location.hash.substring(1));
    } else {
        showContent('content1');
    }
});

// Function to get the CSS class based on the year
function getYearClass(year) {
    if (year >= 2014 && year < 2015) {
        return 'year-2014';
    } else if (year >= 2016 && year < 2017) {
        return 'year-2016';
    } else if (year >= 2017 && year < 2018) {
        return 'year-2017';
    } else if (year >= 2018 && year < 2019) {
        return 'year-2018';
    } else if (year >= 2019 && year < 2020) {
        return 'year-2019';
    } else if (year >= 2020 && year < 2021) {
        return 'year-2020';
    } else if (year >= 2021 && year < 2022) {
        return 'year-2021';
    }
}

// Function to get the tick color based on the year
function getTickColor(year) {
    if (year >= 2014 && year < 2015) {
        return '#FF0000'; // Red
    } else if (year >= 2016 && year < 2017) {
        return '#00FF00'; // Green
    } else if (year >= 2017 && year < 2018) {
        return '#7979ec'; // Blue
    } else if (year >= 2018 && year < 2019) {
        return '#FFFF00'; // Yellow
    } else if (year >= 2019 && year < 2020) {
        return '#FF00FF'; // Magenta
    } else if (year >= 2020 && year < 2021) {
        return '#00FFFF'; // Cyan
    } else if (year >= 2021 && year < 2022) {
        return '#FFA500'; // Orange
    }
}

// Function to update the tick colors
function updateTickColors() {
    document.querySelectorAll('.vis-time-axis .vis-text').forEach(function (element) {
        let year = parseInt(element.textContent.trim());
        if (!isNaN(year)) {
            element.style.color = getTickColor(year);
        }
    });
}

// Create the timeline container
var timelineContainer = document.createElement('div');
timelineContainer.id = 'timelineContainer';
document.getElementById('content1').appendChild(timelineContainer);

// DOM element where the Timeline will be attached
var container = document.getElementById("timelineContainer");

// Create a DataSet (allows two way data-binding)
var items = new vis.DataSet([
    { id: 2, content: '<a href="https://arxiv.org/abs/1406.2661" target="_blank">GANs</a>', start: "2014-01-01", className: getYearClass(2014), title: "GANs, introduced in 2014, revolutionized the field of generative tasks by enabling machines to create realistic data." },
    { id: 3, content: '<a href="https://www.graphics.stanford.edu/~niessner/papers/2016/1facetoface/thies2016face.pdf" target="_blank">Face2Face</a>', start: "2016-07-03", className: getYearClass(2016), title: "Face2Face, introduced in 2016, enabled real-time face capture and reenactment, allowing for seamless facial animations in RGB videos." },
    { id: 4, content: '<a href="https://deepmind.com/blog/article/wavenet-generative-model-raw-audio" target="_blank">WaveNet</a>', start: "2016-09-01", className: getYearClass(2016), title: "WaveNet, a generative model introduced in 2016, revolutionized raw audio synthesis with its ability to generate realistic and human-like speech." },
    { id: 5, content: '<a href="https://arxiv.org/abs/1702.07825" target="_blank">DeepVoice1</a>', start: "2017-01-01", className: getYearClass(2017), title: "DeepVoice1, introduced in 2017, brought advancements in real-time neural text-to-speech, enabling more natural and fluent speech synthesis." },
    { id: 6, content: '<a href="https://grail.cs.washington.edu/projects/AudioToObama/" target="_blank">Synthesizing\nObama</a>', start: "2017-07-01", className: getYearClass(2017), title: "Synthesizing Obama, introduced in 2017, showcased neural network capabilities for video synthesis by generating realistic video of President Obama." },
    { id: 7, content: '<a href="https://www.reddit.com/r/deepfakes/" target="_blank">/deepfakes\n(reddit)</a>', start: "2017-10-01", className: getYearClass(2017), title: "The Deepfakes subreddit, created in 2017, became a hub for sharing and discussing AI-generated deepfake videos." },
    { id: 8, content: '<a href="https://github.com/ondyari/FaceForensics" target="_blank">Face Forensics</a>', start: "2018-01-01", className: getYearClass(2018), title: "FaceForensics, introduced in 2018, provided a large-scale video dataset to aid in the detection of digital forgeries and deepfakes." },
    { id: 9, content: '<a href="https://www.youtube.com/watch?v=cQ54GDm1eL0" target="_blank">Jordan Peele\nObama Deepfake</a>', start: "2018-04-01", className: getYearClass(2018), title: "In 2018, Jordan Peele created a deepfake of Obama, highlighting the potential for misuse of this technology." },
    { id: 10, content: '<a href="https://arxiv.org/abs/1802.06006" target="_blank">Neural Voice\nCloning</a>', start: "2018-06-01", className: getYearClass(2018), title: "Neural Voice Cloning, introduced in 2018, allowed realistic voice replication using only a few samples." },
    { id: 11, content: '<a href="https://www.youtube.com/watch?v=p1b5aiTrGzY" target="_blank">Deep Video\nPortraits</a>', start: "2018-08-01", className: getYearClass(2018), title: "Deep Video Portraits, introduced in 2018, enabled the synthesis of realistic head movements in video." },
    { id: 12, content: '<a href="https://arxiv.org/abs/1808.07371" target="_blank">Motion Transfer</a>', start: "2018-11-01", className: getYearClass(2018), title: "Motion Transfer, introduced in 2018, allowed the transfer of motion from a source video to a target, using just monocular video." },
    { id: 13, content: '<a href="https://grail.cs.washington.edu/projects/AudioToObama/" target="_blank">Text-Based head\nmovement editing</a>', start: "2019-01-01", className: getYearClass(2019), title: "Text-based Editing, introduced in 2019, allowed for the realistic editing of talking-head videos by altering the transcript." },
    { id: 14, content: '<a href="https://arxiv.org/abs/1908.05932" target="_blank">FSGAN</a>', start: "2019-04-01", className: getYearClass(2019), title: "FSGAN, introduced in 2019, enabled face swapping and reenactment without the need for subject-specific training." },
    { id: 15, content: '<a href="https://arxiv.org/abs/1905.08233" target="_blank">Neural Talking\nHeads</a>', start: "2019-08-01", className: getYearClass(2019), title: "Neural Talking Heads, introduced in 2019, used few-shot adversarial learning to create realistic talking head models." },
    { id: 16, content: '<a href="https://www.youtube.com/watch?v=OX9HJsJUDxU" target="_blank">Mark Zuckerberg\nDeepfake</a>', start: "2019-11-01", className: getYearClass(2019), title: "A deepfake of Mark Zuckerberg was released in 2019, demonstrating the potential for high-profile manipulations." },
    { id: 17, content: '<a href="https://arxiv.org/abs/1912.12463" target="_blank">ImaGINator</a>', start: "2020-01-01", className: getYearClass(2020), title: "ImaGINator, introduced in 2020, used GAN technology for advanced image generation." },
    { id: 18, content: '<a href="https://www.youtube.com/watch?v=PCBTZh41Ris" target="_blank">First Order\nMotion Model</a>', start: "2020-04-01", className: getYearClass(2020), title: "The First Order Motion Model, introduced in 2020, enabled image animation from a single source image." },
    { id: 19, content: '<a href="https://arxiv.org/abs/1912.02400" target="_blank">MarioNETte</a>', start: "2020-08-01", className: getYearClass(2020), title: "MarioNETte, introduced in 2020, allowed face reenactment while preserving the identity of unseen targets." },
    { id: 20, content: '<a href="https://arxiv.org/abs/2006.14226" target="_blank">Wav2lip</a>', start: "2020-11-01", className: getYearClass(2020), title: "Wav2Lip, introduced in 2020, provided accurate lip-syncing for talking head videos, enhancing realism." },
    { id: 21, content: '<a href="https://arxiv.org/abs/2009.06515" target="_blank">LipSync3D</a>', start: "2021-01-01", className: getYearClass(2021), title: "LipSync3D, introduced in 2021, enabled efficient learning of personalized lip-sync models from videos." },
    { id: 22, content: '<a href="https://ieeexplore.ieee.org/document/9577825" target="_blank">Pose-guided</a>', start: "2021-05-01", className: getYearClass(2021), title: "Pose-guided Animation, introduced in 2021, allowed for human animation based on a single image." },
    { id: 23, content: '<a href="https://arxiv.org/abs/2103.12656" target="_blank">Speech Portraits</a>', start: "2021-10-01", className: getYearClass(2021), title: "Speech Portraits, introduced in 2021, enabled facial reenactment driven by audio input." }
]);

// Configuration for the Timeline
var options = {
    orientation: { axis: 'left', item: 'top' },
    zoomMin: 1000 * 60 * 60 * 24 * 30, // One month in milliseconds
    zoomMax: 1000 * 60 * 60 * 24 * 365 * 30, // Thirty years in milliseconds
    start: '2010-01-01',
    end: '2022-12-31',
    min: '2013-01-01',
    max: '2022-12-31',
    tooltip: {
        followMouse: true,
        overflowMethod: 'cap'
    }
};

// Create a Timeline
var timeline = new vis.Timeline(container, items, options);

// Update tick colors initially and on range change
timeline.on('changed', function () {
    updateTickColors();
});
timeline.on('rangechange', function () {
    updateTickColors();
});

// Initial tick color update
updateTickColors();


google.charts.load('current', {
    'packages':['geochart'],
  });
  google.charts.setOnLoadCallback(drawRegionsMap);
  
  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ['Country', 'Increase (%)'],
      ['Canada', 477],
      ['United States', 3000],
      ['Mexico', 700],
      ['Brazil', 827],
      ['Argentina', 766],
      ['Chile', 300],
      ['Algeria', 1000],
      ['South Africa', 1200],
      ['Belgium', 2950],
      ['Slovakia', 1500],
      ['Romania', 1766],
      ['Japan', 2800],
      ['Indonesia', 1400],
      ['Vietnam', 3050],
      ['United Arab Emirates', 2200],
      ['Saudi Arabia', 1600],
      ['Philippines', 4500],
      ['Pakistan', 2300],
      ['India', 2700],
      ['Bangaldesh', 2600],
      ['COlombia', 1400],
      ['Ecuador', 1200],
      ['Morocco', 1832],
      ['Turkey', 1533],
      ['Germany', 142],
      ['China', 2800],
      ['Moldova', 900],
      ['Australia', 1530],
    ]);
  
    var options = {
        height: 600, // Set the height of the chart
        width: 800  // Set the width of the chart
    };
  
    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
  
    chart.draw(data, options);
  }
  
  google.charts.load("current", {packages:["corechart"]});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Work',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]
    ]);

    var options = {
      title: 'My Daily Activities',
      is3D: true,
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
    chart.draw(data, options);
  }
  
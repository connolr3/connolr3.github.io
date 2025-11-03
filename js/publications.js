$(document).ready(function() {
    console.log("Ready");

    $.ajax({
        url: "data/publications.json",
        dataType: "json",
        success: function(data) {
            console.log(data);

            // Clear existing content
            $('.publications').empty();

            // Loop through each publication
            data.forEach(function(pub, index) {
                let html = `
                    <div class="publication-item" style="margin-bottom: 1.5em;">
                        <div class="title"><strong>${pub.title}</strong></div>
                                  ${pub.tags ? `<div class="pub-tag">${pub.tags}</div>` : ''}
                        <div class="authors">${pub.authors.join(', ')}</div>

                        ${pub.abstract ? `
                            <button class="toggle-abstract" data-index="${index}">Show Abstract</button>
                            <div class="abstract" id="abstract-${index}" style="display: none;">
                                ${pub.abstract}
                            </div>
                        ` : ''}

                        ${pub.journal ? `<div class="journal"><em>${pub.journal}</em></div>` : ''}
                        ${pub.conference ? `<div class="conference"><em>${pub.conference}</em></div>` : ''}
                          ${pub.workshop ? `<div class="conference"><em>${pub.workshop}</em></div>` : ''}
                        ${pub.year ? `<div class="year">${pub.year}</div>` : ''}
                  
                    </div>
                `;

                $('.publications').append(html);
            });

            // Abstract toggle behavior
            $('.publications').on('click', '.toggle-abstract', function() {
                const index = $(this).data('index');
                const abstractDiv = $(`#abstract-${index}`);
                
                if (abstractDiv.is(':visible')) {
                    abstractDiv.slideUp();
                    $(this).text('Show Abstract');
                } else {
                    abstractDiv.slideDown();
                    $(this).text('Hide Abstract');
                }
            });
        },
        error: function() {
            console.error("Error loading publications.json");
            $('.publications').html("<p>Could not load publications.</p>");
        }
    });
});

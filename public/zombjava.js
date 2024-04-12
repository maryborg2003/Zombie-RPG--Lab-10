fetch('package.json')
  .then(res => res.json())
  .then(data => {
    const storyText = data.story.text;
    const storyContainer = document.getElementById('storyHome');
    const wrappedContent = document.createElement('div');
    wrappedContent.textContent = storyText;
    storyContainer.appendChild(wrappedContent);
  });

fetch('package.json')
  .then(res => res.json())
  .then(data => {
    const storyText = data.borgname.text;
    const storyContainer = document.getElementById('mbname');
    const wrappedContent = document.createElement('div');
    wrappedContent.textContent = storyText;
    storyContainer.appendChild(wrappedContent);
  });

$(function() {
  $("#form2").submit(function(event) {
    event.preventDefault();
    const name = $("#personName").val();
    const email = $("#personEmail").val();
    const donation = $("#personDonation").val();

    if (donation !== "") {
      const data = {
        name: name,
        email: email,
        donation: donation
      };
      $.post("/api/person/create", data, function(data) {
        console.log("Form submitted successfully");
      }).fail(function(error) {
        console.error("Error submitting form:", error);
      });

      alert("Thank you for your interest in donating!");

      $("#personName").val("");
      $("#personEmail").val("");
      $("#personDonation").val("");
    } else {
      alert("Please enter a donation amount.");
    }
  });

  document.getElementById('submitButton').addEventListener('click', function(event) {
    const donation = document.getElementById('personDonation').value;

    if (donation !== "") {
      alert("Thank you for your interest in donating! We will contact you soon with the donation process.");

      
      document.getElementById('personName').value = "";
      document.getElementById('personEmail').value = "";
      document.getElementById('personDonation').value = "";
    } else {
      alert("Please enter a donation amount.");
    }
  });
});


$(function() {
  $("#form1").submit(function(event) {
    event.preventDefault(); 
    
    const data = {
      sub: $("#sub").val(),
    };

    $.post("/api/emails/create", data, function(responseData) {
      console.log("Form submitted successfully");
    }).fail(function(error) {
      console.error("Error submitting form:", error);
    });

    
    alert("Thank you for subscribing to our newsletter!");

    
    $("#sub").val("");

    return false;
  });
});

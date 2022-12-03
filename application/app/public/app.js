"use strict";
$(function () {
    var questionValues = [
        "Are you quiet?",
        "You prefer to be outside in nature instead of in a building.",
        "You prefer reading instead of talking.",
        "Watching water boil is meditative.",
        "It is very clear, a tree makes plenty of sound when it falls and no one is around to hear it!",
        "TV rots your brain.",
        "You're not desperate at all.",
        "The idea of skydiving is thrilling to you.",
        "Your favorite animal is an elephant.",
        "White Roses are the best!",
    ];
    var questionSetContainerSelector = $('.questionSetContainer');
    var questionFormSelector = $('#question-form');
    var individualQuestionsSelector = $('.question');
    var modalPositionSelector = $('#modalPosition');
    var singleQuestionSetContent = "\n  <div class=\"question mb-5\" id=\"qName\">\n  <h3>What is your name?</h3>\n  <input type=\"text\" id=\"name-question\" />\n  </div>\n  <div class=\"question mb-5\" id=\"qPhoto\">\n  <h3>URL to your profile picture</h3>\n  <input type=\"text\" id=\"photo-question\" />\n  </div>";
    var questionSet = questionValues.map(function (q, i) {
        return "\n    <div class=\"question mt-1 mb-5\" id=q".concat(i + 1, ">\n        <h3>").concat(i + 5, ". ").concat(q, "</h3>\n        <select class=\"custom-select custom-select-sm\">\n        <option selected>Answer Below</option>\n        <option value=\"1\">1 (Strongly Disagree)</option>\n        <option value=\"2\">2</option>\n        <option value=\"3\">3</option>\n        <option value=\"4\">4</option>\n        <option value=\"5\">5 (Strongly Agree)</option>\n        </select>\n        </div>");
    });
    var submitButton = "\n      <button\n      type=\"submit\"\n      id=\"btn-submitter modal\"\n      class=\"btn btn-primary btn-submit mt-2\"\n      data-toggle=\"modal\"\n      data-target=\"#BigModal\"\n      >\n      Submit\n      </button>";
    var modalContent = "\n        <div\n        class=\"modal fade\"\n        id=\"BigModal\"\n        tabindex=\"-1\"\n        role=\"dialog\"\n        aria-labelledby=\"exampleModalLabel\"\n        aria-hidden=\"true\"\n      >\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"exampleModalLabel\">\n                Friendliest Match\n              </h5>\n              <button\n                type=\"button\"\n                class=\"close\"\n                data-dismiss=\"modal\"\n                aria-label=\"Close\"\n              >\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              <span id=\"modalBodyContent\"></span>\n            </div>\n            <div class=\"modal-footer\">\n              <button\n                type=\"button\"\n                class=\"btn btn-secondary\"\n                data-dismiss=\"modal\"\n              >\n                Close\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>";
    individualQuestionsSelector.addClass('mt-1 mb-5');
    // Append Question List
    questionSetContainerSelector.append.apply(questionSetContainerSelector, questionSet);
    // Append Initial Questions
    questionFormSelector.append(singleQuestionSetContent);
    // Append Question list to Question Form
    questionFormSelector.append(questionSetContainerSelector);
    questionFormSelector.append(submitButton);
    modalPositionSelector.append(modalContent);
    $('#question-form').on("submit", function (event) {
        event.preventDefault();
        var answered = $(':selected');
        var answers = [];
        var user = $('#name-question').val();
        var photo = $('#photo-question').val();
        answered.each(function (answer) {
            console.log('answer from answered array: ', answer);
            answers.push(answer);
        });
        var profile = {
            name: user,
            photo: photo,
            scores: answers,
        };
        if (profile.scores.includes(NaN) ||
            profile.name === '' ||
            profile.photo === '') {
            var errMsg = $('#err-msg');
            errMsg.text('Please make sure to fill out all the questions and submit again!');
            $('#modalBodyContent').html("\n        <p class=\"text-center\">Please make sure to fill out all the questions and submit again!</p>\n                ");
            return console.log('Please make sure to fill out all the questions and submit again!');
        }
        else {
            $.post('api/friends', profile)
                .then(function (data) {
                if (data.errorCheck) {
                    if (data.matchSuccess) {
                        $('#modalBodyContent').html("\n                <div class=\"d-flex justify-content-around align-items-center\">\n                  <p class=\"text-center\">You are now betrothed to ".concat(data.match.name, "\n                  </p>\n                    <img src=\"").concat(data.match.photo, "\" alt=\"Your Match's picture\" class=\"justify-content-center align-items-center\">\n                </div>\n                "));
                    }
                    else {
                        $('#modalBodyContent').html("\n                       <p class=\"text-center\"> Sorry, we found no matching profiles.</p>\n                ");
                    }
                }
                else {
                    $('#modalBodyContent').html("\n              <p class=\"text-center\">There was a problem processing your submission.\n              Please try again later.</p>\n                ");
                    console.log('Problem processing your submission');
                }
            })
                .then(function () {
                $('#question-form').trigger('reset');
            })
                .catch(function (err) { return console.error(err); });
        }
    });
});

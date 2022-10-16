$(function () {
  const questionValues = [
    `Are you quiet?`,
    `You prefer to be outside in nature instead of in a building.`,
    `You prefer reading instead of talking.`,
    `Watching water boil is meditative.`,
    `It is very clear, a tree makes plenty of sound when it falls and no one is around to hear it!`,
    `TV rots your brain.`,
    `You're not desperate at all.`,
    `The idea of skydiving is thrilling to you.`,
    `Your favorite animal is an elephant.`,
    `White Roses are the best!`,
  ]

  const questionSetContainerSelector = $('.questionSetContainer')
  const questionFormSelector = $('#question-form')
  const individualQuestionsSelector = $('.question')
  const modalPositionSelector = $('#modalPosition')

  const singleQuestionSetContent = `
  <div class="question mb-5" id="qName">
  <h3>What is your name?</h3>
  <input type="text" id="name-question" />
  </div>
  <div class="question mb-5" id="qPhoto">
  <h3>URL to your profile picture</h3>
  <input type="text" id="photo-question" />
  </div>`


  const questionSet = questionValues.map((q, i) => {
    return `
    <div class="question mt-1 mb-5" id=q${i}>
        <h3>${i}. ${q}</h3>
        <select class="custom-select custom-select-sm">
        <option selected>Answer Below</option>
        <option value="1">1 (Strongly Disagree)</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5 (Strongly Agree)</option>
        </select>
        </div>`
  })

  const submitButton = `
      <button
      type="submit"
      id="btn-submitter modal"
      class="btn btn-primary btn-submit mt-2"
      data-toggle="modal"
      data-target="#BigModal"
      >
      Submit
      </button>`

  const modalContent = `
        <div
        class="modal fade"
        id="BigModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Friendliest Match
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <span id="modalBodyContent"></span>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>`


  individualQuestionsSelector.addClass('mt-1 mb-5')

  // Append Question List
  questionSetContainerSelector.append(questionSet)

  // Append Initial Questions
  questionFormSelector.append(singleQuestionSetContent)

  // Append Question list to Question Form
  questionFormSelector.append(questionSetContainerSelector)
  questionFormSelector.append(submitButton)

  modalPositionSelector.append(modalContent)

  $('#question-form').on("submit", function (event) {
    event.preventDefault()
    let answered = $(':selected')
    let answers = []

    let user = $('#name-question').val().trim()

    let photo = $('#photo-question').val().trim()

    answered.each(function () {
      answers.push(parseInt($(this).val()))
    })

    let profile = {
      name: user,
      photo: photo,
      scores: answers,
    }
    if (
      profile.scores.includes(NaN) ||
      profile.name === '' ||
      profile.photo === ''
    ) {
      let errMsg = $('#err-msg')
      errMsg.text(
        'Please make sure to fill out all the questions and submit again!'
      )
      $('#modalBodyContent').html(`
        <p class="text-center">Please make sure to fill out all the questions and submit again!</p>
                `)
      return console.log(
        'Please make sure to fill out all the questions and submit again!'
      )
    } else {
      $.post('api/friends', profile)
        .then(function (data) {
          if (data.errorCheck) {
            if (data.matchSuccess) {
              $('#modalBodyContent').html(`
                <div class="d-flex justify-content-around align-items-center">
                  <p class="text-center">You are now betrothed to ${data.match.name}
                  </p>
                    <img src="${data.match.photo}" alt="Your Match's picture" class="justify-content-center align-items-center">
                </div>
                `)
            } else {
              $('#modalBodyContent').html(`
                       <p class="text-center"> Sorry, we found no matching profiles.</p>
                `)
            }
          } else {
            $('#modalBodyContent').html(`
              <p class="text-center">There was a problem processing your submission.
              Please try again later.</p>
                `)
            console.log('Problem processing your submission')
          }
        })

        .then(() => {
          $('#question-form')[0].reset()
        })
        .then(() => { })
        .catch((err) => console.error(err))
    }
  })
})
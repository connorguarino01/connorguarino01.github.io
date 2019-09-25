<template>

<!-- Begin Mailchimp Signup Form -->
<div id="mc_embed_signup">
  <form action="https://gmail.us4.list-manage.com/subscribe/post?u=72e961310ece38ada273735ed&amp;id=73d09fbb30" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
      <div class="mc-field-group">
	      <label for="mce-FNAME">First Name: </label>
	      <input type="text" value="" name="FNAME" class="" id="mce-FNAME" placeholder="Jane">
      </div>
      <div class="mc-field-group">
	      <label for="mce-LNAME">Last Name: </label>
	      <input type="text" value="" name="LNAME" class="" id="mce-LNAME" placeholder="Doe">
      </div>
      <div class="mc-field-group">
	      <label for="mce-EMAIL">Email Address: </label>
	      <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="you@email.com">
      </div>
	    <div id="mce-responses" class="clear">
		    <div class="response" id="mce-error-response" style="display:none"></div>
		    <div class="response" id="mce-success-response" style="display:none"></div>
	    </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
      <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_72e961310ece38ada273735ed_73d09fbb30" tabindex="-1" value="">
      </div>
      <div class="clear">
        <input type="submit" value="Submit" name="subscribe" id="mc-embedded-subscribe" class="button">
      </div>
    </div>
  </form>
</div>
<!--End mc_embed_signup-->

</template>

<style lang="scss">
#mc_embed_signup {
  padding-top: 1em;
}

.mc-field-group {
  display: flex;
  position: relative;
  justify-content: space-between;
  padding-bottom: 0.5em;
}

.mc-field-group > input {
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  border-bottom-width: 0.125em;
  border-style: dashed;
  border-color: white;
  background-color: transparent;
  color: white;
}

.mc-field-group > label{
  padding-right: 0.5em;
}

input::placeholder {
  color: grey;
  padding-left: 0.125em;
}

.clear {
  display: flex;
  position: relative;
  justify-content: center;
  padding-top: 0.5em;
}

#mc-embedded-subscribe {
  font-family: "VinerHand";
  border-width: 0.125em;
  border-color: white;
  border-style: dashed;
  background-color: transparent;
  color: white;
  padding: 0.375em;
  font-size: 1em;
}

#mc-embedded-subscribe:hover {
  background-color: white;
  color: var(--stag-green);
}

:root {
    --stag-beige: #ced1b2;
    --stag-lightbeige: #EEF2CD;
    --stag-green: #262e09;
}

</style>

<script>
  export default {
    name: 'SubModal',
  };
</script>
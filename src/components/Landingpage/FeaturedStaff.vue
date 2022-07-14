<template>
  <div class="feature">
    <div class="tabs">
      <div class="tab-2">
        <label
          for="tab2-1"
          style="
            color: black;
            font-size: medium;
            font-weight: bold;
            margin-bottom: 0px;
          "
          >Featured Staff Picks</label
        >
        <input id="tab2-1" name="tabs-two" type="radio" checked="checked" />
        <div>
          <div class="row">
            <div class="col">
              <p style="margin-bottom: 0px; font-size: medium; margin-top: 2px">
                COUNTRY
              </p>
              <select class="form-select">
                <option selected>Kenya</option>
                <option value="1">Kenya</option>
                <option value="2">Uganda</option>
                <option value="3">Rwanda</option>
              </select>
            </div>
            <div class="col">
              <p style="margin-bottom: 0px; font-size: medium; margin-top: 2px">
                TYPE
              </p>
              <select class="form-select">
                <option selected>All</option>
                <option value="1">Newest to Oldest</option>
                <option value="2">Oldest to Newest</option>
              </select>
            </div>

            <div class="col">
              <button type="button" class="btn" style="margin-top: 28px">
                <strong>FILTER</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-2">
        <label
          for="tab2-2"
          style="
            color: black;
            font-size: medium;
            font-weight: bold;
            margin-bottom: 0px;
          "
          >Events</label
        >
        <input id="tab2-2" name="tabs-two" type="radio" />
        <div>
          <div class="row">
            <div class="col">
              <p style="margin-bottom: 0px; font-size: medium; margin-top: 2px">
                COUNTRY
              </p>
              <select class="form-select">
                <option selected>Kenya</option>
                <option value="1">Kenya</option>
                <option value="2">Uganda</option>
                <option value="3">Rwanda</option>
              </select>
            </div>
            <div class="col"></div>
            <div class="col">
              <p
                style="
                  margin-bottom: 0px;
                  font-size: medium;
                  padding-top: 5px;
                  margin-top: 2px;
                "
              >
                SORT BY
              </p>
              <select class="form-select">
                <option selected>All</option>
                <option value="1">Newest to Oldest</option>
                <option value="2">Oldest to Newest</option>
              </select>
            </div>

            <div class="col">
              <button type="button" class="btn" style="margin-top: 30px">
                <strong>FILTER</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeaturedStaff",
  components: {},
};
</script>

<style scoped>
.btn {
  width: 250px;
  height: 38px;
  background-color: #ffff00;
  color: black;
  border-radius: 0px;
  border: 2px solid #d3d3d3;
}

.form-select {
  border-radius: 10px;
}
.feature {
  border: 1px solid #d3d3d3;
  box-shadow: 1px 0.5px 0.5px #d3d3d3;
  margin-left: 60px;
  margin-right: 60px;
  margin-bottom: 30px;
  border-radius: 25px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #f4f4f9;
  height: 200px;
}

button:focus,
input:focus,
textarea:focus,
select:focus {
  outline: none;
}

.tabs {
  display: block;
  display: -webkit-flex;
  display: -moz-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  -moz-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 0;
  overflow: hidden;
}
.tabs [class^="tab"] label,
.tabs [class*=" tab"] label {
  color: #efedef;
  cursor: pointer;
  display: block;
  font-size: 1.1em;
  font-weight: 300;
  line-height: 1em;
  padding: 2rem 0;
  text-align: center;
}
.tabs [class^="tab"] [type="radio"],
.tabs [class*=" tab"] [type="radio"] {
  border-bottom: 1px solid rgba(239, 237, 239, 0.5);
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: block;
  width: 100%;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.tabs [class^="tab"] [type="radio"]:hover,
.tabs [class^="tab"] [type="radio"]:focus,
.tabs [class*=" tab"] [type="radio"]:hover,
.tabs [class*=" tab"] [type="radio"]:focus {
  border-bottom: 3px solid #ffff00;
}
.tabs [class^="tab"] [type="radio"]:checked,
.tabs [class*=" tab"] [type="radio"]:checked {
  border-bottom: 4px solid #ffff00;
}
.tabs [class^="tab"] [type="radio"]:checked + div,
.tabs [class*=" tab"] [type="radio"]:checked + div {
  opacity: 1;
}
.tabs [class^="tab"] [type="radio"] + div,
.tabs [class*=" tab"] [type="radio"] + div {
  display: block;
  opacity: 0;
  padding: 2rem 0;
  width: 90%;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.tabs .tab-2 {
  width: 50%;
}
.tabs .tab-2 [type="radio"] + div {
  width: 200%;
  margin-left: 200%;
}
.tabs .tab-2 [type="radio"]:checked + div {
  margin-left: 0;
}
.tabs .tab-2:last-child [type="radio"] + div {
  margin-left: 100%;
}
.tabs .tab-2:last-child [type="radio"]:checked + div {
  margin-left: -100%;
}
</style>

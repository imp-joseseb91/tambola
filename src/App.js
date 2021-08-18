import "./styles.css";
import { WebSocketLink } from "@apollo/client/link/ws";

export default function App() {
  const hasuraSecretKey =
    "tM76mlMBiS1QUL11YmizF5Zk4Tp31fgWsVvo3ERHFdPxmBBqun0Oid2jHwTYDabP";
  const getTambolaURL =
    "https://creative-mosquito-80.hasura.app/api/rest/tambola";
  const updateTambolaURL =
    "https://creative-mosquito-80.hasura.app/api/rest/tambola-update";

  function sendReqeust(url, method, body = {}) {
    let options = {
      method: method,
      headers: {
        "Content-Type": "application/json",
        "X-Hasura-Admin-Secret": hasuraSecretKey
      }
    };
    if (method === "POST") {
      options = { ...options, body: JSON.stringify(body) };
    }
    return fetch(url, options);
  }

  const divs = document.querySelectorAll(".number-box");
  divs.forEach((el) =>
    el.addEventListener("change", (event) => {
      const _this = event.currentTarget.getElementsByTagName("input")[0];
      const body = {
        num: _this.id.split("-")[1],
        is_checked: _this.checked
      };
      sendReqeust(updateTambolaURL, "POST", body)
        .then((response) => response.json())
        .then((data) => console.log(data));
    })
  );

  const wsLink = new WebSocketLink({
    uri: `ws://creative-mosquito-80.hasura.app/v1/graphql`,
    options: {
      reconnect: true,
      connectionParams: {
        headers: {
          "Content-Type": "application/json",
          "X-Hasura-Admin-Secret": hasuraSecretKey
        }
      }
    }
  });

  return (
    <div className="App">
      <div>
        <div className="board">
          <div className="number-box">
            <input type="checkbox" id="number-1" />
            <label htmlFor="number-1">1</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-2" />
            <label htmlFor="number-2">2</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-3" />
            <label htmlFor="number-3">3</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-4" />
            <label htmlFor="number-4">4</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-5" />
            <label htmlFor="number-5">5</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-6" />
            <label htmlFor="number-6">6</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-7" />
            <label htmlFor="number-7">7</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-8" />
            <label htmlFor="number-8">8</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-9" />
            <label htmlFor="number-9">9</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-10" />
            <label htmlFor="number-10">10</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-11" />
            <label htmlFor="number-11">11</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-12" />
            <label htmlFor="number-12">12</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-13" />
            <label htmlFor="number-13">13</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-14" />
            <label htmlFor="number-14">14</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-15" />
            <label htmlFor="number-15">15</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-16" />
            <label htmlFor="number-16">16</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-17" />
            <label htmlFor="number-17">17</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-18" />
            <label htmlFor="number-18">18</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-19" />
            <label htmlFor="number-19">19</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-20" />
            <label htmlFor="number-20">20</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-21" />
            <label htmlFor="number-21">21</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-22" />
            <label htmlFor="number-22">22</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-23" />
            <label htmlFor="number-23">23</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-24" />
            <label htmlFor="number-24">24</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-25" />
            <label htmlFor="number-25">25</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-26" />
            <label htmlFor="number-26">26</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-27" />
            <label htmlFor="number-27">27</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-28" />
            <label htmlFor="number-28">28</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-29" />
            <label htmlFor="number-29">29</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-30" />
            <label htmlFor="number-30">30</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-31" />
            <label htmlFor="number-31">31</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-32" />
            <label htmlFor="number-32">32</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-33" />
            <label htmlFor="number-33">33</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-34" />
            <label htmlFor="number-34">34</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-35" />
            <label htmlFor="number-35">35</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-36" />
            <label htmlFor="number-36">36</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-37" />
            <label htmlFor="number-37">37</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-38" />
            <label htmlFor="number-38">38</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-39" />
            <label htmlFor="number-39">39</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-40" />
            <label htmlFor="number-40">40</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-41" />
            <label htmlFor="number-41">41</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-42" />
            <label htmlFor="number-42">42</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-43" />
            <label htmlFor="number-43">43</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-44" />
            <label htmlFor="number-44">44</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-45" />
            <label htmlFor="number-45">45</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-46" />
            <label htmlFor="number-46">46</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-47" />
            <label htmlFor="number-47">47</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-48" />
            <label htmlFor="number-48">48</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-49" />
            <label htmlFor="number-49">49</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-50" />
            <label htmlFor="number-50">50</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-51" />
            <label htmlFor="number-51">51</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-52" />
            <label htmlFor="number-52">52</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-53" />
            <label htmlFor="number-53">53</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-54" />
            <label htmlFor="number-54">54</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-55" />
            <label htmlFor="number-55">55</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-56" />
            <label htmlFor="number-56">56</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-57" />
            <label htmlFor="number-57">57</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-58" />
            <label htmlFor="number-58">58</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-59" />
            <label htmlFor="number-59">59</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-60" />
            <label htmlFor="number-60">60</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-61" />
            <label htmlFor="number-61">61</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-62" />
            <label htmlFor="number-62">62</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-63" />
            <label htmlFor="number-63">63</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-64" />
            <label htmlFor="number-64">64</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-65" />
            <label htmlFor="number-65">65</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-66" />
            <label htmlFor="number-66">66</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-67" />
            <label htmlFor="number-67">67</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-68" />
            <label htmlFor="number-68">68</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-69" />
            <label htmlFor="number-69">69</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-70" />
            <label htmlFor="number-70">70</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-71" />
            <label htmlFor="number-71">71</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-72" />
            <label htmlFor="number-72">72</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-73" />
            <label htmlFor="number-73">73</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-74" />
            <label htmlFor="number-74">74</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-75" />
            <label htmlFor="number-75">75</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-76" />
            <label htmlFor="number-76">76</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-77" />
            <label htmlFor="number-77">77</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-78" />
            <label htmlFor="number-78">78</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-79" />
            <label htmlFor="number-79">79</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-80" />
            <label htmlFor="number-80">80</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-81" />
            <label htmlFor="number-81">81</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-82" />
            <label htmlFor="number-82">82</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-83" />
            <label htmlFor="number-83">83</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-84" />
            <label htmlFor="number-84">84</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-85" />
            <label htmlFor="number-85">85</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-86" />
            <label htmlFor="number-86">86</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-87" />
            <label htmlFor="number-87">87</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-88" />
            <label htmlFor="number-88">88</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-89" />
            <label htmlFor="number-89">89</label>
          </div>
          <div className="number-box">
            <input type="checkbox" id="number-90" />
            <label htmlFor="number-90">90</label>
          </div>
        </div>
        <h2 className="count">Numbers Checked - </h2>
      </div>
    </div>
  );
}

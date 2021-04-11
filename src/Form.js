import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const onSubmit = (data) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "sendnspend",
        ...data,
      }),
    })
      .then(() => navigate("/thank-you/"))
      .catch((error) => alert(error));
  };
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      name="sendnspend"
      method="post"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="sendnspend" />
      <div class="mb-3 sm-12">
        <label for="FirstName" class="form-label">
          First Name
        </label>
        <input
          type="text"
          id="FirstName"
          className="form-control"
          placeholder="First name"
          {...register("FirstName", { required: true, maxLength: 80 })}
        />
      </div>
      <div class="mb-3">
        <label for="LastName" class="form-label">
          Last Name
        </label>
        <input
          type="text"
          id="LastName"
          className="form-control"
          placeholder="Last name"
          {...register("LastName", { required: true, maxLength: 100 })}
        />
      </div>
      <div class="mb-3">
        <label for="Email" class="form-label">
          Email
        </label>
        <input
          type="text"
          id="Email"
          className="form-control"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
      </div>
      <div class="mb-3">
        <label for="MobileNumber" class="form-label">
          Mobile Number
        </label>
        <input
          type="tel"
          id="MobileNumber"
          className="form-control"
          placeholder="Mobile Number"
          {...register("MobileNumber", {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
        />
      </div>
      <div class="mb-3">
        <label for="Company" class="form-label">
          Company
        </label>
        <input
          type="text"
          id="Company"
          className="form-control"
          placeholder="Company"
          {...register("Company", { required: true, maxLength: 80 })}
        />
      </div>
      <div class="mb-3">
        <label for="Message" class="form-label">
          Message
        </label>
        <textarea
          type="text"
          id="Message"
          className="form-control"
          placeholder="Message"
          {...register("Message")}
        />
      </div>
      <input type="submit" class="btn btn-primary" />
    </form>
  );
}

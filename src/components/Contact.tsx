import { FaSquareXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { useSnackbar } from "notistack";
import { FormEvent, useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await fetch("https://formspree.io/f/mkgwrbad", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });
      enqueueSnackbar("Email sent successfully", { variant: "success" });
      setEmail("");
      setMessage("");
    } catch (error) {
      enqueueSnackbar("Error sending email", { variant: "error" });
    }
  };
  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center mt-20 relative"
    >
      <h2 className="text-4xl max-sm:text-2xl font-bold">
        Contact Information
      </h2>
      <div className="flex max-sm:flex-col max-sm:gap-4 justify-center items-center w-full max-w-5xl mt-8 px-6 py-4">
        <div className="sm:-mt-24 flex-1">
          <h3 className="text-3xl font-semibold mb-4">Social Media Links</h3>
          <div className="flex gap-4">
            <a
              href="https://x.com/d7_fluke?t=hx5wCS9zizCPPxdKs4yqyQ&s=08"
              target="_blank"
            >
              <FaSquareXTwitter className="size-10 hover:-translate-y-1 transition-transform cursor-pointer" />
            </a>
            <a href="https://discord.gg/DZTYQJDt" target="_blank">
              <FaDiscord
                className="size-10 hover:-translate-y-1 transition-transform cursor-pointer"
                color="#7299ee"
              />
            </a>
            <a
              href="https://open.spotify.com/user/31do6dcqielj2jn4brot23ntgf4y?si=8a44f8f528374e1d"
              target="_blank"
            >
              <FaSpotify
                className="size-10 hover:-translate-y-1 transition-transform cursor-pointer"
                color="#1ED760"
              />
            </a>
            <a href="https://www.facebook.com/fluke.yt.9" target="_blank">
              <FaFacebook
                className="size-10 hover:-translate-y-1 transition-transform cursor-pointer"
                color="#316FF6"
              />
            </a>
            <a
              href="https://www.reddit.com/user/Ok-General9505/"
              target="_blank"
            >
              <FaReddit
                className="size-10 hover:-translate-y-1 transition-transform cursor-pointer"
                color="#FF4500"
              />
            </a>
          </div>
        </div>
        <div className="flex-1 w-full">
          <h3 className="text-3xl font-semibold text-center">Contact Me</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
            <input
              type="text"
              placeholder="Enter your email."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              rows={10}
              placeholder="Start typing your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="bg-primary py-3 text-white font-semibold rounded-xl hover:opacity-75">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

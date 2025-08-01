import Link from "next/link";

import { Button } from "../../../ui/button";

import { Facebook, Twitter } from "lucide-react";

const ArticleShareButtons = ({ url }) => {
  const encodedUrl = encodeURIComponent(url);

  return (
    <>
      <Link
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="ghost"
          size="icon"
          className="text-blue-600 hover:bg-blue-50"
        >
          <Facebook className="h-5 w-5" />
        </Button>
      </Link>

      <Link
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="ghost"
          size="icon"
          className="text-blue-400 hover:bg-blue-50"
        >
          <Twitter className="h-5 w-5" />
        </Button>
      </Link>

      <Link
        href={`https://api.whatsapp.com/send?text=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="ghost" size="icon" className="hover:bg-green-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 50 50"
          >
            <path
              fill="#2dea55"
              d="M37.04,36.609l-2.149-0.716c-16.539-5.513-19.825-19.506-19.956-20.1L14.492,13.8l7.322-1.465	l2.875,6.71l-3.423,1.467c1.722,2.863,4.567,6.303,9.152,8.999l1.421-3.316l6.71,2.875L37.04,36.609z"
            ></path>
            <path
              fill="#2dea55"
              d="M2.016,48.846l4.352-13.929C4.816,31.851,4,28.441,4,25C4,12.869,13.869,3,26,3s22,9.869,22,22	s-9.869,22-22,22c-3.186,0-6.267-0.679-9.17-2.019L2.016,48.846z M26,7C16.075,7,8,15.075,8,25c0,3.053,0.786,6.076,2.273,8.743	l0.418,0.75l-2.707,8.661l9.276-2.42l0.673,0.339C20.476,42.352,23.19,43,26,43c9.925,0,18-8.075,18-18S35.925,7,26,7z"
            ></path>
            <path
              fill="#0cbc35"
              d="M17.274,40.731l-5.133,1.339c1.423,1.157,2.993,2.138,4.676,2.915l7.863-2.051	C22.009,42.738,19.497,41.969,17.274,40.731z"
            ></path>
            <path
              fill="#0cbc35"
              d="M10.706,34.445c-1.106-1.784-1.923-3.765-2.35-5.89l-1.987,6.357c0.783,1.543,1.74,2.982,2.85,4.291	L10.706,34.445z"
            ></path>
          </svg>
        </Button>
      </Link>
    </>
  );
};

export default ArticleShareButtons;

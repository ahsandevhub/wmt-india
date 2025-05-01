export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} WeMasterTrade. All rights reserved. <br />
        Developer:{" "}
        <a
          href="https://ahsandevhub.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-400 hover:underline"
        >
          Ahsan DevHub
        </a>
      </p>
    </footer>
  );
}

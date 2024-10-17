import data from "../data/data.json";

const Footer = () => {
  return (
    <footer className="">
      <div className="bg-gray-500">
        <div className="container mx-auto mb-10 flex flex-col md:flex-row justify-between p-8">
          <h3 className="text-4xl font-semibold mb-4">{data.navbar.title}</h3>
          <div className="flex space-x-4 mt-4">
            {data.footer.socialIcons.map((icon, index) => (
              <a
                key={index}
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-800"
              >
                <i className={icon.iconClass}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {data.footer.sections.map((section, index) => (
            <div key={index}>
              <h5 className="text-lg font-semibold mb-4">{section.title}</h5>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h5 className="text-lg font-semibold mb-4">
              {data.footer.getInTouch.title}
            </h5>
            <form>
              <div className="flex mb-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none"
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600">
                  {data.footer.getInTouch.buttonText}
                </button>
              </div>
            </form>
            <p className="text-gray-600">
              {data.footer.getInTouch.description}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="mt-10 pt-6 container  px-28  mx-auto py-8 md:flex text-center  md:px-8">
          <p className="text-gray-500">{data.footer.footerText}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

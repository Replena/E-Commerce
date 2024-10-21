import { ChevronRightIcon } from "@heroicons/react/24/outline";

function ProductDescription() {
  return (
    <div className="bg-text-light">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {/* Image section */}
        <div className="col-span-1">
          <img
            src="https://via.placeholder.com/300"
            alt="the quick fox jumps over"
            className="w-full h-auto rounded-md"
          />
        </div>

        {/* Description section */}
        <div className="col-span-1 md:col-span-1 flex flex-col space-y-4">
          <h2 className="text-2xl font-bold">the quick fox jumps over</h2>
          <p className="text-gray-700">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met. Met minim Mollie non desert Alamo est
            sit cliquey dolor do met sent. RELIT official consequent door ENIM
            RELIT Mollie. Excitation venial consequent sent nostrum met. Met
            minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met. Met minim Mollie non desert Alamo est
            sit cliquey dolor do met sent. RELIT official consequent door ENIM
            RELIT Mollie. Excitation venial consequent sent nostrum met.
          </p>
        </div>

        {/* Additional Information section */}
        <div className="col-span-1 md:col-span-1 flex flex-col space-y-4">
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold">Additional Information</h3>
            <ul className="space-y-2 my-2">
              <li className="flex items-center">
                <ChevronRightIcon className="h-5 w-5 text-gray-600 mr-2" />
                the quick fox jumps over the lazy dog
              </li>
              <li className="flex items-center">
                <ChevronRightIcon className="h-5 w-5 text-gray-600 mr-2" />
                the quick fox jumps over the lazy dog
              </li>
              <li className="flex items-center">
                <ChevronRightIcon className="h-5 w-5 text-gray-600 mr-2" />
                the quick fox jumps over the lazy dog
              </li>
              <li className="flex items-center">
                <ChevronRightIcon className="h-5 w-5 text-gray-600 mr-2" />
                the quick fox jumps over the lazy dog
              </li>
            </ul>
          </div>

          {/* Reviews section */}
          <div>
            <h3 className="text-xl font-bold">Reviews (0)</h3>
            <ul className="space-y-2 my-2">
              <li className="flex items-center">
                <ChevronRightIcon className="h-5 w-5 text-gray-600 mr-2" />
                the quick fox jumps over the lazy dog
              </li>
              <li className="flex items-center">
                <ChevronRightIcon className="h-5 w-5 text-gray-600 mr-2" />
                the quick fox jumps over the lazy dog
              </li>
              <li className="flex items-center">
                <ChevronRightIcon className="h-5 w-5 text-gray-600 mr-2" />
                the quick fox jumps over the lazy dog
              </li>
              <li className="flex items-center">
                <ChevronRightIcon className="h-5 w-5 text-gray-600 mr-2" />
                the quick fox jumps over the lazy dog
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;

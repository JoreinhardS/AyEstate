document.addEventListener('DOMContentLoaded',() => {
    const footer = `
    <footer class="bg-black text-white">
        <div class="container mx-auto px-5 py-[50px] lg:pt-[100px] lg:pb-8 flex flex-col lg:flex-row lg:gap-[230px]">
            <div class="flex flex-col gap-5 lg:gap-6">
                <div>
                    <a href="#" class="logo text-playball text-3xl font-normal">AyEstate</a>
                </div>
                <div class="text-[#7F879E] font-normal lg:font-medium break-words text-sm2 lg:text-base leading-5 lg:leading-8">hello.ayestate@example.com <br>
                    (+1) 2345 6789</div>
                <div class="text-[#7F879E] font-normal lg:font-medium text-sm2 lg:text-base leading-5 lg:leading-8">4140 Parker Rd. Allentown, <br>
                    New Mexico 31134</div>
                <hr class="lg:hidden h-0.5 bg-[##7F879E] my-4 w-full">
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 mt-8 lg:mt-0 lg:gap-x-20">
                <div class="flex flex-col gap-3 w-full">
                    <h1 class="text-white lg:mb-8 font-bold lg:font-semibold text-sm lg:text-base leading-5 lg:leading-6">Pages</h1>
                    <p class="text-[#7F879E] font-normal lg:font-medium text-sm2 lg:text-base leading-6 lg:leading-8">Listings</p>
                    <p class="text-[#7F879E] font-normal lg:font-medium text-sm2 lg:text-base leading-6 lg:leading-8">About Us</p>
                    <p class="text-[#7F879E] font-normal lg:font-medium text-sm2 lg:text-base leading-6 lg:leading-8">Blog</p>
                </div>
                <div class="flex flex-col gap-3 w-full">
                    <h1 class="text-white lg:mb-8 font-bold lg:font-semibold text-sm lg:text-base leading-5 lg:leading-6">Support</h1>
                    <p class="text-[#7F879E] font-normal lg:font-medium text-sm2 lg:text-base leading-6 lg:leading-8">Properties</p>
                    <p class="text-[#7F879E] font-normal lg:font-medium text-sm2 lg:text-base leading-6 lg:leading-8">FAQ</p>
                    <p class="text-[#7F879E] font-normal lg:font-medium text-sm2 lg:text-base leading-6 lg:leading-8">Contact Us</p>
                </div>
                <div class="flex flex-col gap-3 w-full">
                    <h1 class="text-white lg:mb-8 font-bold lg:font-semibold text-sm lg:text-base leading-5 lg:leading-6">Legal</h1>
                    <p class="text-[#7F879E] font-normal lg:font-medium text-sm2 lg:text-base leading-6 lg:leading-8">Terms of Services</p>
                    <p class="text-[#7F879E] font-normal lg:font-medium text-sm2 lg:text-base leading-6 lg:leading-8">Terms and Condition</p>
                    <p class="text-[#7F879E] font-normal lg:font-medium text-sm2 lg:text-base leading-6 lg:leading-8">Complaints Process</p>
                    <p class="text-[#7F879E] font-normal lg:font-medium text-sm2 lg:text-base leading-6 lg:leading-8">Privacy Policy</p>
                </div>
                <div class="flex flex-col gap-3 w-full">
                    <h1 class="text-white lg:mb-8 font-bold lg:font-semibold text-sm lg:text-base leading-5 lg:leading-6">Platform</h1>
                    <p class="text-[#7F879E] font-normal lg:font-medium text-sm2 lg:text-base leading-6 lg:leading-8">Desktop App</p>
                    <p class="text-[#7F879E] font-normal lg:font-medium text-sm2 lg:text-base leading-6 lg:leading-8">Mobile App</p>
                </div>
            </div>
        </div>
        <div class="container hidden lg:block mx-auto px-5 lg:pt-[40px] lg:pb-8 text-center items-center justify-center">
            <p class="font-normal text-base leading-7">Copyright © AyEstate | Designed by AY Studio</p>
        </div>
    </footer>`;
    document.body.insertAdjacentHTML('afterend', footer);
});
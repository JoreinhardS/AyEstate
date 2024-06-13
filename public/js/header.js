document.addEventListener('DOMContentLoaded', () => {
    const header = `
    <header>
        <nav x-data="{open:false}" class="py-5 lg:py-7 px-5">
            <div class="container lg:px-10 mx-auto">
                <div class="flex justify-between items-center">
                    <a href="#" class="logo text-playball text-3xl font-normal">AyEstate</a>
                    <img class="lg:hidden cursor-pointer" @click="open = !open" src="../asset/logo/nav.svg" alt="">
                    <div class="hidden lg:flex space-x-6">
                        <ul class="flex gap-12 ">
                            <li class="text-base text-secondcolor font-semibold"><a href="../index.html">Home</a></li>
                            <li class="text-base text-secondcolor font-semibold">Listing</li>
                            <li class="text-base text-secondcolor font-semibold">Company</li>
                            <li class="text-base text-secondcolor font-semibold"><a href="blog.html">Blog</a></li>
                            <li class="text-base text-secondcolor font-semibold"><a href="about.html">About Us</a></li>
                        </ul>
                    </div>
                    <button class="hidden lg:flex w-40 bg-maincolor px-3 py-4 font-semibold rounded-xl text-sm justify-center border">Contact Us</button> 
                </div>
                <div x-show="open" class="fixed lg:hidden flex flex-col right-0 mr-5 w-1/3 bg-maincolor rounded-xl p-4 z-50"
                    x-transition:enter="transition ease-out duration-300"
                    x-transition:enter-start="opacity-0 scale-90"
                    x-transition:enter-end="opacity-100 scale-100"
                    x-transition:leave="transition ease-in duration-300"
                    x-transition:leave-start="opacity-100 scale-100"
                    x-transition:leave-end="opacity-0 scale-90">
                    <ul class="space-y-4">
                        <li><a href="../index.html" class="block text-sm font-semibold">Home</a></li>
                        <li><a href="#" class="block text-sm font-semibold">Listing</a></li>
                        <li><a href="#" class="block text-sm font-semibold">Company</a></li>
                        <li><a href="blog.html" class="block text-sm font-semibold">Blog</a></li>
                        <li><a href="about.html" class="block text-sm font-semibold">About Us</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    `;
    document.body.insertAdjacentHTML('afterbegin', header);
});
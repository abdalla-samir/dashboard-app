import Body from "../components/body-header";
import FileCard from "../components/file-cards";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

function Files() {
    return (
        <>
            <Sidebar />
            <div className="w-full">
                <Header />
                <div className="main-body-height">
                    <Body name="Files" />
                    <div className="flex flex-col lg:flex-row gap-3">
                        <div className="flex-1 grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                            <FileCard src="pdf.svg" name="my-file.pdf" date="20/06/2020" size="5.5MB" user="Elzero" />
                            <FileCard src="avi.svg" name="my-file.avi" date="16/5/2021" size="12.5MB" user="Admin" />
                            <FileCard src="eps.svg" name="my-file.eps" date="16/5/2021" size="2.7MB" user="Uploader" />
                            <FileCard src="psd.svg" name="my-file.psd" date="16/5/2021" size="15.1MB" user="Osama" />
                            <FileCard src="dll.svg" name="my-file.dll" date="16/5/2021" size="2.2MB" user="Coder" />
                            <FileCard src="png.svg" name="my-file.png" date="16/5/2021" size="1.1MB" user="Designer" />
                            <FileCard src="dll.svg" name="my-file.dll" date="16/5/2021" size="2.2MB" user="Coder" />
                            <FileCard src="png.svg" name="my-file.png" date="16/5/2021" size="1.1MB" user="Designer" />
                            <FileCard src="psd.svg" name="my-file.psd" date="16/5/2021" size="15.1MB" user="Osama" />
                            <FileCard src="pdf.svg" name="my-file.pdf" date="20/06/2020" size="5.5MB" user="Elzero" />
                            <FileCard src="avi.svg" name="my-file.avi" date="16/5/2021" size="12.5MB" user="Admin" />
                            <FileCard src="eps.svg" name="my-file.eps" date="16/5/2021" size="2.7MB" user="Uploader" />
                            <FileCard src="pdf.svg" name="my-file.pdf" date="20/06/2020" size="5.5MB" user="Elzero" />
                            <FileCard src="avi.svg" name="my-file.avi" date="16/5/2021" size="12.5MB" user="Admin" />
                            <FileCard src="eps.svg" name="my-file.eps" date="16/5/2021" size="2.7MB" user="Uploader" />
                            <FileCard src="psd.svg" name="my-file.psd" date="16/5/2021" size="15.1MB" user="Osama" />
                            <FileCard src="dll.svg" name="my-file.dll" date="16/5/2021" size="2.2MB" user="Coder" />
                            <FileCard src="png.svg" name="my-file.png" date="16/5/2021" size="1.1MB" user="Designer" />
                            <FileCard src="dll.svg" name="my-file.dll" date="16/5/2021" size="2.2MB" user="Coder" />
                            <FileCard src="png.svg" name="my-file.png" date="16/5/2021" size="1.1MB" user="Designer" />
                            <FileCard src="psd.svg" name="my-file.psd" date="16/5/2021" size="15.1MB" user="Osama" />
                            <FileCard src="pdf.svg" name="my-file.pdf" date="20/06/2020" size="5.5MB" user="Elzero" />
                            <FileCard src="avi.svg" name="my-file.avi" date="16/5/2021" size="12.5MB" user="Admin" />
                            <FileCard src="eps.svg" name="my-file.eps" date="16/5/2021" size="2.7MB" user="Uploader" />
                        </div>
                        <div className="p-4 bg-white rounded-md min-w-60 lg:order-none -order-1 max-h-fit">
                            <h2 className="main-title">Files Statistics</h2>
                            <div className="flex flex-col gap-3">
                                <div className="flex justify-between items-center p-2 border rounded">
                                    <div className="flex justify-between items-center">
                                        <div className="bg-blue-200 w-9 h-9 flex justify-center items-center">
                                            <i class="fa-regular fa-file-pdf fa-lg blue center-flex c-blue text-blue-500 icon"></i>
                                        </div>
                                        <div className="ml-2">
                                            <span className="block text-sm font-medium">PDF Files</span>
                                            <span className="block text-sm text-gray-500">130</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="block text-sm text-gray-500">6.5GB</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center p-2 border rounded">
                                    <div className="flex justify-between items-center">
                                        <div className="bg-green-200 w-9 h-9 flex justify-center items-center">
                                            <i class="fa-regular fa-images fa-lg green center-flex c-green text-green-500 icon"></i>
                                        </div>
                                        <div className="ml-2">
                                            <span className="block text-sm font-medium">Images</span>
                                            <span className="block text-sm text-gray-500">115 Files</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="block text-sm text-gray-500">3.5GB</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center p-2 border rounded">
                                    <div className="flex justify-between items-center">
                                        <div className="bg-red-200 w-9 h-9 flex justify-center items-center">
                                            <i class="fa-regular fa-file-word fa-lg red center-flex text-red-500 c-red icon"></i>
                                        </div>
                                        <div className="ml-2">
                                            <span className="block text-sm font-medium">Word Files</span>
                                            <span className="block text-sm text-gray-500">110 Files</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="block text-sm text-gray-500">3.2GB</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center p-2 border rounded">
                                    <div className="flex justify-between items-center">
                                        <div className="bg-orange-200 w-9 h-9 flex justify-center items-center">
                                            <i class="fa-solid fa-file-csv fa-lg orange center-flex c-orange text-orange-500 icon"></i>
                                        </div>
                                        <div className="ml-2">
                                            <span className="block text-sm font-medium">CSV Files</span>
                                            <span className="block text-sm text-gray-500">99 Files</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="block text-sm text-gray-500">2.9GB</span>
                                    </div>
                                </div>
                                <a href="#link" className="w-fit mx-auto bg-blue-600 hover:animation hover:bg-blue-700 transition py-2 px-3 rounded text-white">
                                    <i class="fa-solid fa-angles-up mr-2 animation"></i>Upload</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Files;
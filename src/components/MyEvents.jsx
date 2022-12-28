const MyEvents = () => {
    return ( 
        <div class="grid grid-cols-3 gap-4 mt-4 min-h-screen">
            <div className="h-80 bg-slate-100 drop-shadow-2xl">
            <h1 className="text-2xl font-bold text-center mt-3">Date</h1>
            <h1 className="text-2xl font-bold">event name</h1>
            <h1 className="text-2xl font-bold mt-3">from: to:</h1>
            <img className="h-32 w-full absolute bottom-0 " src="https://nmgprod.s3.amazonaws.com/media/files/28/09/28098119c156671e8255dedbc45f1db5/cover_image.jpg.760x400_q85_crop_upscale.jpg"/>
            </div>
            <div className="h-80 bg-slate-100 drop-shadow-2xl"></div>
            <div className="h-80 bg-slate-100  drop-shadow-2xl"></div>
        </div>
     );
}
 
export default MyEvents;
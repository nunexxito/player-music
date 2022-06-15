import {MdOutlineShortText} from 'react-icons/md'

export default function Search({search, setSearch}) {
    return(
        <div className="max-w-[1150px] bg-[#1a1a1a] rounded-full overflow-hidden border-2 border-[#333] p-1.5 px-5 pr-8 flex items-center h-full">
            <div className="h-4 w-4 rounded-full border-2 flex-shrink-0 animate-pulse"/>
            <input 
            type="text" 
            value={search} 
            onChange={e => setSearch(e.target.value)} 
            className='bg-[#1a1a1a] text-white border-none lg:w-full focus:ring-0 py-0 outline-none h-full placeholder-[#fafafa] text-xs'
            placeholder="Search..."
            />

            <div className='flex items-center space-x-1.5 text-[#cecece]'>
                <div className='flex items-center border-l border-dotted border-[#333]'>
                    <MdOutlineShortText className='text-2x1 animate-pulse mx-2'/>
                    <span>Filters</span>
                </div>
            </div>
        </div>
    );
}
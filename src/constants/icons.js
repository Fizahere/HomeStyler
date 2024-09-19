import { IoHome } from "react-icons/io5"
import { IoInformationCircleSharp } from "react-icons/io5"
import { MdIntegrationInstructions } from "react-icons/md"
import { FaChevronDown } from "react-icons/fa"
import { IoMdContacts } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5"
import { IoMdMoon } from "react-icons/io"
import { FaSearch } from "react-icons/fa"
import { VscThreeBars } from "react-icons/vsc"
import { IoMdSunny } from "react-icons/io"
import { FaUserCircle } from "react-icons/fa"
import { IoLogOut } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { LuLayoutDashboard } from "react-icons/lu";
import { CiStar } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { IoLogIn } from "react-icons/io5";
import { TbCategory } from "react-icons/tb";
import { TbBrandGithubFilled } from "react-icons/tb";
import { GrLinkedinOption } from "react-icons/gr";
import { TfiRulerPencil } from "react-icons/tfi";
import { BsBuildings } from "react-icons/bs";
import { RiCompassesLine } from "react-icons/ri";
import { GiHammerNails } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { MdMailOutline } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";

const APP_ICONS = {
    DASHBOARD: LuLayoutDashboard,
    WEBSITE: CiStar,

    //SideBar
    HOME: IoHome,
    ABOUT: IoInformationCircleSharp,
    INTEGRATION: MdIntegrationInstructions,
    USERS: IoMdContacts,
    SETTING: IoSettingsSharp,
    CATEGORY:TbCategory,
    PHONE:MdOutlineLocalPhone,
    FEEDBACK:VscFeedback,

    //service section icons
    PENCILSCALE:TfiRulerPencil,
    BUILDINGS:BsBuildings,
    COMPASS:RiCompassesLine,
    HAMMER:GiHammerNails,

    //Actions
    MOON: IoMdMoon,
    SUN: IoMdSunny,
    TOGGLE: FaChevronDown,
    SEARCH: FaSearch,
    THREEBARS: VscThreeBars,
    CLOSE: IoClose,
    LOGOUT: IoLogOut,
    ADD: IoMdAdd,
    GOOGLE: FcGoogle,
    LOGIN:IoLogIn,
    RIGHTARROW:FaArrowRight,
    OPENEYE:IoEyeSharp,
    CLOSEDEYE:IoEyeOffSharp,

    //Footer
GITHUB:TbBrandGithubFilled,
LINKEDIN:GrLinkedinOption,
INSTAGRAM: FaInstagram,
FACEBOOK: LuFacebook,
MAIL: MdMailOutline,

    //Avatar
    PROFILE: FaUserCircle,
}

export default APP_ICONS

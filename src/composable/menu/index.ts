import { MenuItem } from "../../layout/types/indexType"

// create for sildbar and call in app.vuE
export const menu: MenuItem[]  = [
    {
        label: "Home page",
        key: "1",
        link: "/"
    },
    {
        label: "Feature",
        key: "2",
        link: "/featurepage"
    },
    {
        label: "About",
        key: "3",
        link: "/aboutpage"
    },
    {
        label: "Learning",
        key: "3",
        link: "/Learning"
    },
]


export function headerMenu(path: string, listMenu: MenuItem[]): MenuItem | null {
    for (const menu of listMenu){
        if (menu.link === path) return menu;
        if (menu.child?.length){
            const foundInchild = headerMenu(path,menu.child);
            if (foundInchild) return foundInchild;
        }
    }
    return null; // if the menu item is not found
}
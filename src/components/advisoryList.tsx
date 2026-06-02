import type { advisoryListType } from "@/types/advisoryList.type";

export function RenderAdvisoryList({ advisoryList, listCls, titleCls, itemCls, listContainerCls, leftIconCls, title }:
    { advisoryList: advisoryListType, listCls?: string, titleCls?: string, itemCls?: string, listContainerCls?: string, leftIconCls?: string, title?: string
     }
    ){
    return (
        <div className={listContainerCls}>
            <h3 className={titleCls}> {title} </h3>

            <ul className={listCls}>
                {
                    advisoryList?.items.map(
                        listItem => (
                            <li className={itemCls} key={listItem.id}>
                                { listItem.leftIcon && <img className={leftIconCls} src={listItem.leftIcon} alt=""/> }
                                {listItem.content}
                            </li>
                        )
                    )
                }
                </ul>
        </div>
    );
}
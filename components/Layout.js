import NavigationCard from "../components/NavigationCard";

export default function Layout({children, hideNavigation}) {
  let rightColumnClasses = '';

  if(hideNavigation) {
    rightColumnClasses += 'w-full';
  } else {
    rightColumnClasses += 'mx-4 md:mx-0 md:w-9/12'
  }
  return (
    <div className="flex mt-4 max-w-4xl mx-auto gap-6 mb-24 md:mb-0 z-100">
      {!hideNavigation && (
        <div className="fixed md:static w-full bottom-0 md:w-3/12 -mb-5 z-50">
          <NavigationCard></NavigationCard>
        </div>
        
      )}
      <div className={rightColumnClasses}>
        {children}
      </div>
    </div>
  );
}

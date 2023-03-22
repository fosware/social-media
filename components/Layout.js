import NavigationCard from "../components/NavigationCard";

export default function Layout({children, hideNavigation}) {
  let rightColumnClasses = '';

  if(hideNavigation) {
    rightColumnClasses += 'w-full';
  } else {
    rightColumnClasses += 'mx-4 md:mx-0 md:w-9/12'
  }
  return (
    <div className="flex mt-4 max-w-4xl mx-auto gap-6">
      {!hideNavigation && (
        <div className="fixed md:static w-full bottom-0 md:w-3/12 -mb-5">
          <NavigationCard></NavigationCard>
        </div>
        
      )}
      <div className={rightColumnClasses}>
        {children}
      </div>
    </div>
  );
}

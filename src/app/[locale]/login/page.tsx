import {useTranslations} from 'next-intl';


const login = () => {
  const t = useTranslations("Index")
  return (
    <div className='m-12'>login
      <div>
        {t("title")}
      </div>
    </div>
  )
}

export default login
from pages.home_page import HomePage
from pages.login_register_page import LoginRegisterPage


class TestLoginWithValidCredentials:

    def test_login_with_valid_credentials(self, driver):
        # ARRANGE
        home_page = HomePage(driver)
        home_page.open()

        # ACT
        login_page = LoginRegisterPage(driver)
        login_page.open_login_page()

        login_page.complete_login_email_address()
        login_page.complete_login_password()
        login_page.click_log_in_button()

        # ASSERT
        login_page.is_user_logged_in()

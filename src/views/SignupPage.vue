<template>
	<div class="signup-container">
		<h1 class="signup-title">회원가입</h1>
		<form class="signup-form" @submit.prevent="submitForm" autocomplete="false">
			<div class="signup-form-content">
				<label for="email">{{ userInfo.email.title }}</label>
				<input
					:type="userInfo.email.type"
					id="email"
					v-model="userInfo.email.value"
					@keyup="firstTypedData('email')"
					placeholder="abc@email.com"
				/>
				<p v-if="!isEmailValid && isFirstTyped('email')">Error message</p>
			</div>
			<div class="signup-form-content">
				<label for="password">{{ userInfo.password.title }}</label>
				<div class="input-container">
					<input
						:type="userInfo.password.type"
						id="password"
						v-model="userInfo.password.value"
						@keyup="firstTypedData('password')"
						placeholder="******"
					/>
					<span class="eye-icon-container" @click="toggleType('password')">
						<img
							v-if="!isShowPassword('password')"
							src="@/assets/icons/eye-open.svg"
							alt="show password button"
						/>
						<img
							v-else
							src="@/assets/icons/eye-close.svg"
							alt="hide password button"
						/>
					</span>
				</div>
				<p v-if="!isPasswordValid && isFirstTyped('password')">Error message</p>
			</div>
			<div class="signup-form-content">
				<label for="confirmPassword">{{
					userInfo.confirmPassword.title
				}}</label>
				<div class="input-container">
					<input
						:type="userInfo.confirmPassword.type"
						id="confirmPassword"
						v-model="userInfo.confirmPassword.value"
						@keyup="firstTypedData('confirmPassword')"
						placeholder="******"
					/>
					<span
						class="eye-icon-container"
						@click="toggleType('confirmPassword')"
					>
						<img
							v-if="!isShowPassword('confirmPassword')"
							src="@/assets/icons/eye-open.svg"
							alt="show password button"
						/>
						<img
							v-else
							src="@/assets/icons/eye-close.svg"
							alt="hide password button"
						/>
					</span>
				</div>
				<p v-if="!isConfirmedPassword && isFirstTyped('confirmPassword')">
					Error message
				</p>
			</div>
			<button :disabled="!isFormValid" type="submit">가입하기</button>
		</form>
	</div>
</template>

<script>
import { checkEmail, checkIsSameValue, checkIsExist } from '@/utils/validate';

export default {
	name: 'SignupPage',
	data() {
		return {
			userInfo: {
				email: {
					title: '이메일',
					value: null,
					type: 'email',
					firstTyped: false,
				},
				password: {
					title: '비밀번호',
					value: null,
					type: 'password',
					firstTyped: false,
				},
				confirmPassword: {
					title: '비밀번호 확인',
					value: null,
					type: 'password',
					firstTyped: false,
				},
			},
		};
	},
	computed: {
		isShowPassword() {
			return key => {
				return this.userInfo[key].type === 'text';
			};
		},
		isFirstTyped() {
			return key => {
				return this.userInfo[key].firstTyped;
			};
		},
		isEmailValid() {
			const email = this.userInfo.email.value;

			return !!email && checkEmail(email);
		},
		isPasswordValid() {
			const password = this.userInfo.password.value;

			return !!password && checkIsExist(password);
		},
		isConfirmedPassword() {
			const password = this.userInfo.password.value;
			const confirmPassword = this.userInfo.confirmPassword.value;

			return !!confirmPassword && checkIsSameValue(password, confirmPassword);
		},
		isFormValid() {
			return (
				this.isEmailValid && this.isPasswordValid && this.isConfirmedPassword
			);
		},
	},
	methods: {
		firstTypedData(key) {
			this.userInfo[key].firstTyped = true;
		},
		toggleType(key) {
			const type = this.userInfo[key].type;
			this.userInfo[key].type = type === 'text' ? 'password' : 'text';
		},
		submitForm() {
			const { email, password, confirmPassword } = this.userInfo;
			const userData = {
				email: email.value,
				password: password.value,
				confirmPassword: confirmPassword.value,
			};

			//TODO: request api call
		},
	},
};
</script>

<style lang="scss" scoped>
.signup-container {
	max-width: 300px;
	max-height: 600px;
	border: 1px solid rgb(226, 226, 226);
	border-radius: 8px;
	margin: 4rem auto;
	padding: 24px;
	overflow: hidden;

	.signup-title {
		text-align: center;
	}

	.signup-form {
		border-top: 1px solid #eee;
		margin-top: 2rem;
		padding-top: 1rem;
		display: flex;
		flex-direction: column;

		&-content {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			margin-bottom: 1rem;

			label {
				line-height: 1.43;
				letter-spacing: -0.3px;
				font-size: 14px;
				font-weight: 400;
				color: #3e4042;
			}

			.input-container {
				width: 100%;
				position: relative;
				margin-top: 4px;

				.eye-icon-container {
					display: block;
					width: 15px;
					height: 15px;
					position: absolute;
					top: 50%;
					right: 13px;
					transform: translate(0, -50%);
					cursor: pointer;

					img {
						display: block;
						width: 100%;
						height: 100%;
					}
				}

				input {
					padding-right: 2rem;
				}
			}

			input {
				appearance: none;
				width: 100%;
				padding: 13px 12px;
				height: 48px;
				line-height: 1.47;
				font-size: 15px;
				border: 1px solid #dee2e6;
				letter-spacing: -0.3px;
				border-radius: 4px;
				background-color: #fff;

				&[id='email'] {
					margin-top: 4px;
				}

				&:focus {
					border-color: #4c68d7;
				}
			}

			p {
				margin-top: 4px;
				line-height: 1.5;
				letter-spacing: -0.3px;
				font-size: 12px;
				font-weight: 400;
				margin-top: 4px;
				color: #e95950;
			}
		}

		button {
			width: 100%;
			height: 48px;
			border: 1px solid #4c68d7;
			display: flex;
			background-color: #4c68d7;
			align-items: center;
			justify-content: center;
			border-radius: 4px;
			color: #fff;
			font-weight: 700;
			line-height: 1.47;
			font-size: 15px;
			letter-spacing: -0.3px;
			margin-top: 1rem;

			&:disabled {
				background-color: #eee;
				border-color: #eee;
			}
		}
	}
}
</style>
